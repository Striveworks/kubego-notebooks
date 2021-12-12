package storageclasses

import (
	v1 "k8s.io/api/storage/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	"github.com/Striveworks/kubego-notebooks/pkg/adapters"
	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
)

func ListStorageClasses() (*v1.StorageClassList, error) {
	return adapters.
		K8sClient.
		StorageV1().
		StorageClasses().
		List(metav1.ListOptions{})
}

func StorageClassListResponse(storageclassList *v1.StorageClassList) (outputs []output.StorageClass) {
	for _, sc := range storageclassList.Items {
		outputs = append(outputs, output.StorageClass(sc.Name))
	}
	return outputs
}

func GetDefaultStorageClass() (string, error) {
	scs, err := ListStorageClasses()
	if err != nil {
		return "", err
	}
	for _, sc := range scs.Items {
		annotations := sc.ObjectMeta.Annotations
		if annotations == nil {
			continue
		}

		// Possible annotations
		keys := []string{
			"storageclass.kubernetes.io/is-default-class",
			"storageclass.beta.kubernetes.io/is-default-class", // GKE
		}

		for _, key := range keys {
			if _, ok := annotations[key]; ok {
				return sc.Name, nil
			}
		}

	}

	return "", nil
}
