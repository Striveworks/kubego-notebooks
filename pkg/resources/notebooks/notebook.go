package notebooks

import (
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"github.com/Striveworks/kubego-notebooks/config"
	"github.com/Striveworks/kubego-notebooks/pkg/adapters"
	"github.com/Striveworks/kubego-notebooks/pkg/models/input"
	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	"github.com/Striveworks/kubego-notebooks/pkg/resources/ingresses"
	"github.com/Striveworks/kubego-notebooks/pkg/resources/pvcs"
	"github.com/go-errors/errors"
	notebook "github.com/kubeflow/kubeflow/components/notebook-controller/api/v1beta1"
	"k8s.io/apimachinery/pkg/types"
)

const (
	EventTypeWarning        = "Warning"
	StopAnnotation   string = "kubeflow-resource-stopped"
)

func GetNotebook(namespace, notebookName string) (*notebook.Notebook, error) {
	result := notebook.Notebook{}
	err := adapters.NotebookClient.
		Get().
		Resource("notebooks").
		Name(notebookName).
		Namespace(namespace).
		Do().
		Into(&result)
	if err != nil {
		return nil, err
	}

	return &result, nil
}

func ListNotebooks(namespace string) (*notebook.NotebookList, error) {
	result := notebook.NotebookList{}
	err := adapters.NotebookClient.
		Get().
		Resource("notebooks").
		Namespace(namespace).
		Do().
		Into(&result)
	if err != nil {
		return nil, err
	}

	return &result, nil
}

func CreateNotebook(notebookInput input.Notebook) (*notebook.Notebook, error) {
	nb := NewNotebook(notebookInput).
		SetNotebookImage().
		SetPullPolicy().
		SetServerType().
		SetCPU().
		SetMemory().
		SetGPUs().
		SetTolerations().
		SetAffinity().
		SetConfigurations()

	// Workspace Volume
	wsV := notebookInput.Workspace

	if !notebookInput.NoWorkspace && wsV.Type == "New" {
		// Create the PVC
		_, err := pvcs.CreatePVC(wsV, notebookInput.Namespace)
		if err != nil {
			return nil, err
		}
	}
	if !notebookInput.NoWorkspace && wsV.Type != "None" {
		nb = nb.AddNotebookVolume(wsV)
	}

	// Add the Data Volumes
	nb = nb.CreateDataVolumes()

	// shm
	nb = nb.SetSHM()

	result := notebook.Notebook{}
	err := adapters.NotebookClient.
		Post().
		Namespace(nb.Notebook.Namespace).
		Resource("notebooks").
		Body(&nb.Notebook).
		Do().
		Into(&result)

	if err != nil {
		return nil, err
	}

	// Optionally create ingress based on configuration
	if config.Config.Ingress.Create {
		ingresses.CreateIngress(
			nb.Notebook,
		)
	}

	return nil, nil

}

func DeleteNotebook(name, namespace string) error {
	err := adapters.NotebookClient.
		Delete().
		Resource("notebooks").
		Name(name).
		Namespace(namespace).
		Do().
		Error()
	if err != nil {
		return err
	}

	if config.Config.Ingress.Create {
		err = ingresses.DeleteIngress(name, namespace)
		if err != nil {
			return err
		}
	}

	return nil
}

func StartStopNotebook(input input.StartStop, nb *notebook.Notebook) error {
	if input.Stopped {
		// Check if notebook is already stopped
		if _, ok := nb.Annotations[StopAnnotation]; ok {
			return errors.New("Notebook already stopped")
		}
		// Stop Notebook
		nb.Annotations[StopAnnotation] = time.Now().String()
	} else {
		// Start notebook
		delete(nb.Annotations, StopAnnotation)
	}

	patchBytes, err := json.Marshal(
		[]map[string]interface{}{
			{
				"op":    "replace",
				"path":  "/metadata/annotations",
				"value": nb.Annotations},
		},
	)
	if err != nil {
		return err
	}

	result := notebook.Notebook{}
	err = adapters.NotebookClient.
		Patch(types.JSONPatchType).
		Resource("notebooks").
		Name(nb.Name).
		Namespace(nb.Namespace).
		Body(patchBytes).
		Do().
		Into(&result)
	if err != nil {
		return err
	}

	return nil
}

func NotebookListReponse(notebookList *notebook.NotebookList) (outputs []output.Notebook) {
	for _, notebook := range notebookList.Items {
		output := NotebookResponse(&notebook)
		outputs = append(outputs, output)
	}
	return outputs
}

func NotebookResponse(notebook *notebook.Notebook) output.Notebook {
	container := notebook.Spec.Template.Spec.Containers[0]
	serverType := ""
	shortImage := strings.Split(container.Image, "/")
	volumes := []string{}
	status, _ := processStatus(notebook)

	for _, vol := range container.VolumeMounts {
		volumes = append(volumes, vol.Name)
	}

	if len(notebook.ObjectMeta.Annotations) > 0 {
		annotations := notebook.ObjectMeta.Annotations
		serverType = annotations["notebooks.kubeflow.org/server-type"]
	}

	return output.Notebook{
		Name:       notebook.Name,
		Namespace:  notebook.Namespace,
		ServerType: serverType,
		Age:        fmt.Sprint(notebook.CreationTimestamp.Unix()),
		Image:      container.Image,
		ShortImage: shortImage[len(shortImage)-1],
		CPU:        container.Resources.Requests.Cpu().String(),
		Memory:     container.Resources.Requests.Memory().String(),
		Volumes:    volumes,
		Status: output.Status{
			Phase:   string(status.Phase),
			Message: status.Message,
			State:   status.State,
		},
	}

}
