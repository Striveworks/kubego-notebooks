package namespaces

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	"github.com/Striveworks/kubego-notebooks/pkg/adapters"
	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
)

// ListNamespaces returns a list of kubernetes namespaces
func ListNamespaces() (*v1.NamespaceList, error) {
	return adapters.K8sClient.
		CoreV1().
		Namespaces().
		List(metav1.ListOptions{})
}

// NamespaceListResponse converts a *v1.NamespaceList insto a response object
func NamespaceListResponse(namespaceList *v1.NamespaceList) (outputs []output.Namespace) {
	for _, namespace := range namespaceList.Items {
		outputs = append(outputs, output.Namespace(namespace.Name))
	}
	return outputs
}
