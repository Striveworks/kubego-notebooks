package poddefaults

import (
	"github.com/Striveworks/kubego-notebooks/pkg/adapters"
	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	poddefault "github.com/kubeflow/kubeflow/components/admission-webhook/pkg/apis/settings/v1alpha1"
)

func GetPodDefaults(namespace string) (*poddefault.PodDefaultList, error) {
	result := poddefault.PodDefaultList{}
	err := adapters.PodDefaultClient.
		Get().
		Resource("poddefaults").
		Namespace(namespace).
		Do().
		Into(&result)
	if err != nil {
		return nil, err
	}
	return &result, nil
}

func PodDefaultsResponse(podDefaults *poddefault.PodDefaultList) output.PodDefaults {
	var defaults []output.PodDefault
	var label, desc string
	for _, pd := range podDefaults.Items {
		// Get first key in match label
		for k, _ := range pd.Spec.Selector.MatchLabels {
			label = k
			break
		}

		if pd.Spec.Desc != "" {
			desc = pd.Spec.Desc
		} else {
			desc = pd.Name
		}

		output := output.PodDefault{
			Label: label,
			Desc:  desc,
		}
		defaults = append(defaults, output)
	}

	return output.PodDefaults{
		PodDefaults: defaults,
	}
}
