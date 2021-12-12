package pvcs

import (
	"github.com/Striveworks/kubego-notebooks/pkg/adapters"
	"github.com/Striveworks/kubego-notebooks/pkg/models/input"
	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func ListPVCs(namespace string) (*v1.PersistentVolumeClaimList, error) {
	return adapters.
		K8sClient.
		CoreV1().
		PersistentVolumeClaims(namespace).
		List(metav1.ListOptions{})
}

func PVCListResponse(pvcList *v1.PersistentVolumeClaimList) (response output.PVCs) {
	for _, pvc := range pvcList.Items {
		size := pvc.Spec.Resources.Requests[v1.ResourceStorage]
		output := output.PVC{
			Name:      pvc.Name,
			Namespace: pvc.Namespace,
			Size:      size.String(),
		}
		response.PVCS = append(response.PVCS, output)
	}
	return response
}

func CreatePVC(wsV input.Datavolume, namespace string) (*v1.PersistentVolumeClaim, error) {
	pvc := &v1.PersistentVolumeClaim{
		ObjectMeta: metav1.ObjectMeta{
			Name:      wsV.Name,
			Namespace: namespace,
		},
		Spec: v1.PersistentVolumeClaimSpec{
			AccessModes: []v1.PersistentVolumeAccessMode{
				v1.PersistentVolumeAccessMode(wsV.Mode),
			},
			Resources: v1.ResourceRequirements{
				Requests: v1.ResourceList{
					v1.ResourceStorage: resource.MustParse(wsV.Size),
				},
			},
		},
	}
	return adapters.
		K8sClient.
		CoreV1().
		PersistentVolumeClaims(namespace).
		Create(pvc)
}
