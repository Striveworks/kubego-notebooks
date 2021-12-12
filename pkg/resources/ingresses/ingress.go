package ingresses

import (
	"fmt"

	"github.com/Striveworks/kubego-notebooks/config"
	"github.com/Striveworks/kubego-notebooks/pkg/adapters"
	"github.com/Striveworks/kubego-notebooks/pkg/common"
	notebook "github.com/kubeflow/kubeflow/components/notebook-controller/api/v1beta1"
	v1beta1 "k8s.io/api/networking/v1beta1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/intstr"
)

// CreateIngress creates a kuberetes ingress resource
// given a notebook.Notebook
func CreateIngress(nb notebook.Notebook) (*v1beta1.Ingress, error) {
	name := nb.ObjectMeta.Name
	namespace := nb.ObjectMeta.Namespace

	// Conditionally set the path depending on the servertype.
	path := fmt.Sprintf("/notebook/%s/%s", namespace, name)
	if nb.ObjectMeta.Annotations[common.ServerTypeAnnotation] != "jupyter" {
		path = "/"
	}

	// Construct ingress
	ingress := &v1beta1.Ingress{
		ObjectMeta: v1.ObjectMeta{
			Name:        name,
			Namespace:   namespace,
			Annotations: config.Config.Ingress.Annotations,
		},
		Spec: v1beta1.IngressSpec{
			Rules: []v1beta1.IngressRule{
				{
					Host: ingressHost(name),
					IngressRuleValue: v1beta1.IngressRuleValue{
						HTTP: &v1beta1.HTTPIngressRuleValue{
							Paths: []v1beta1.HTTPIngressPath{
								{
									Backend: v1beta1.IngressBackend{
										ServiceName: name,
										ServicePort: intstr.FromInt(80),
									},
									Path: path,
								},
							},
						},
					},
				},
			},
		},
	}

	// Optionally add TLS configuration
	if config.Config.Ingress.Tls {
		ingress.Spec.TLS = []v1beta1.IngressTLS{
			{
				Hosts:      []string{ingressHost(name)},
				SecretName: fmt.Sprintf("%s-tls", ingressHost(name)),
			},
		}
	}

	return adapters.
		K8sClient.
		NetworkingV1beta1().
		Ingresses(namespace).
		Create(ingress)
}

// DeleteIngress delete a kubernetes ingress given
// a resource name and a namespace
func DeleteIngress(name, namespace string) error {
	return adapters.
		K8sClient.
		NetworkingV1beta1().
		Ingresses(namespace).
		Delete(name, &v1.DeleteOptions{})
}

// ingressHost constructs a hostname by
// concatinating the name with the configured
// domain name
func ingressHost(name string) string {
	return fmt.Sprintf("%s%s", name, config.Config.Ingress.Domain)
}
