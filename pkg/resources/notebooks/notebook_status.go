package notebooks

import (
	"fmt"
	"sort"

	"github.com/Striveworks/kubego-notebooks/pkg/adapters"
	notebook "github.com/kubeflow/kubeflow/components/notebook-controller/api/v1beta1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// processStatus returns a Status given a notebook.
func processStatus(notebook *notebook.Notebook) (Status, error) {
	// Check if notebook is stopped
	readyReplicas := notebook.Status.ReadyReplicas
	metadata := notebook.ObjectMeta
	annotations := metadata.Annotations

	if _, ok := annotations[StopAnnotation]; ok {
		if readyReplicas == 0 {
			return CreateStatus(
				Stopped,
				"No Pods are currently running for this Notebook Server.",
				"",
			), nil
		} else {
			return CreateStatus(Terminating, "Notebook Server is stopping.", ""), nil
		}
	}

	if metadata.DeletionTimestamp != nil {
		return CreateStatus(Terminating, "Deleting this notebook server", ""), nil
	}

	state := notebook.Status.ContainerState

	// Use conditions on the Jupyter notebook to determine overall
	// status. If no container state is available, we try to extract information
	// about why the notebook is not starting from the notebook's events
	if readyReplicas == 1 {
		return CreateStatus(Ready, "Running", ""), nil
	}

	if state.Waiting != nil {
		return CreateStatus(Waiting, state.Waiting.Reason, ""), nil
	}

	// Provide the user with detailed information (if any) about
	// why the notebook is not starting
	notebookEvents, err := getNotebookEvents(notebook)
	if err != nil {
		return Status{}, err
	}

	status, reason := Waiting, "Scheduling the Pod"
	eventStatus, eventReason := findErrorEvent(notebookEvents)
	if eventStatus != "" {
		status, reason = eventStatus, eventReason
	}

	return CreateStatus(status, reason, ""), nil

}

func getNotebookEvents(notebook *notebook.Notebook) ([]v1.Event, error) {
	events, err := listNotebookEvents(notebook.Name, notebook.Namespace)
	if err != nil {
		return nil, err
	}
	// User can delete and then create a nb server with the same name.
	// Make sure previous events are not taken into account
	var filteredEvents []v1.Event
	for _, event := range events.Items {
		if event.CreationTimestamp.After(notebook.CreationTimestamp.Time) {
			filteredEvents = append(filteredEvents, event)
		}
	}
	return filteredEvents, nil

}

func listNotebookEvents(name, namespace string) (*v1.EventList, error) {
	selector := fmt.Sprintf("involvedObject.kind=Notebook,involvedObject.name=%s", name)
	return adapters.K8sClient.
		CoreV1().
		Events(namespace).
		List(metav1.ListOptions{FieldSelector: selector})
}

// findErrorEvent returns status and reason from the latest
// event that surfaces the cause of why the resource could not
// be created.For a Notebook, it can be due to:
//  EVENT_TYPE      EVENT_REASON      DESCRIPTION
//  Warning         FailedCreate      pods "x" is forbidden: error
//    looking up service account ... (originated in statefulset)
//  Warning         FailedScheduling  0/1 nodes are available: 1
//    Insufficient cpu (originated in pod)
func findErrorEvent(events []v1.Event) (Phase, string) {
	sortedEvents := make([]v1.Event, len(events))
	copy(sortedEvents, events)
	sort.SliceStable(sortedEvents, func(i, j int) bool {
		return events[i].CreationTimestamp.Before(&events[j].CreationTimestamp)
	})
	for _, event := range sortedEvents {
		if event.Type == EventTypeWarning {
			return Waiting, event.Message
		}
	}
	return "", ""
}
