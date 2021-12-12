package adapters

import (
	"path/filepath"

	poddefault "github.com/kubeflow/kubeflow/components/admission-webhook/pkg/apis/settings/v1alpha1"
	notebook "github.com/kubeflow/kubeflow/components/notebook-controller/api/v1beta1"
	"k8s.io/apimachinery/pkg/runtime/serializer"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/kubernetes/scheme"
	_ "k8s.io/client-go/plugin/pkg/client/auth/oidc"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/client-go/util/homedir"
)

var (
	// Genereric kubernetes clientset
	K8sClient *kubernetes.Clientset
	// kubeflow notebook CRD rest client
	NotebookClient *rest.RESTClient
	// kubeflow poddefault CRD rest client
	PodDefaultClient *rest.RESTClient
)

// GetRestClient reads in a rest.Config conditionally
// using a kube context or a service account
func GetRestClient(inCluster bool) (*rest.Config, error) {
	var config *rest.Config
	var err error

	if !inCluster {
		var configPath string

		if home := homedir.HomeDir(); home != "" {
			configPath = filepath.Join(home, ".kube", "config")
		}
		// use the current context in kubeconfig
		config, err = clientcmd.BuildConfigFromFlags("", configPath)
		if err != nil {
			return nil, err
		}

	} else {
		config, err = rest.InClusterConfig()
		if err != nil {
			return nil, err
		}

	}
	return config, err
}

// CreateK8sClient is a factory method for creating
// a generic kubernetes client
func CreateK8sClient(inCluster bool) error {
	config, err := GetRestClient(inCluster)
	if err != nil {
		return err
	}
	K8sClient = kubernetes.NewForConfigOrDie(config)
	return nil
}

// CreateNotebookClient is a factory method for creating
// a kubernetes rest client for kubeflow's notebook CRDs
func CreateNotebookClient(inCluster bool) error {
	config, err := GetRestClient(inCluster)
	if err != nil {
		return err
	}
	notebook.AddToScheme(scheme.Scheme)
	crdConfig := *config
	crdConfig.ContentConfig.GroupVersion = &notebook.GroupVersion
	crdConfig.APIPath = "/apis"
	crdConfig.NegotiatedSerializer = serializer.NewCodecFactory(scheme.Scheme)
	crdConfig.UserAgent = rest.DefaultKubernetesUserAgent()
	NotebookClient, err = rest.UnversionedRESTClientFor(&crdConfig)
	if err != nil {
		panic(err)
	}

	return nil
}

// CreatePodDefaultClient is a factory method for creating
// a kubernetes rest client for kubeflow's poddefault CRDs
func CreatePodDefaultClient(inCluster bool) error {
	config, err := GetRestClient(inCluster)
	if err != nil {
		return err
	}
	notebook.AddToScheme(scheme.Scheme)
	crdConfig := *config
	crdConfig.ContentConfig.GroupVersion = &poddefault.SchemeGroupVersion
	crdConfig.APIPath = "/apis"
	crdConfig.NegotiatedSerializer = serializer.NewCodecFactory(scheme.Scheme)
	crdConfig.UserAgent = rest.DefaultKubernetesUserAgent()

	PodDefaultClient, err = rest.UnversionedRESTClientFor(&crdConfig)
	if err != nil {
		panic(err)
	}
	return nil
}
