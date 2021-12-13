package notebooks

import (
	"fmt"
	"strings"

	notebook "github.com/kubeflow/kubeflow/components/notebook-controller/api/v1beta1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	"github.com/Striveworks/kubego-notebooks/config"
	"github.com/Striveworks/kubego-notebooks/pkg/common"
	"github.com/Striveworks/kubego-notebooks/pkg/models/input"
	"github.com/Striveworks/kubego-notebooks/pkg/resources/pvcs"
	"k8s.io/apimachinery/pkg/api/resource"
)

// Notebook holds state for the user input,
// defaults, and constructed notebook for a
// request
type Notebook struct {
	Notebook notebook.Notebook
	Defaults common.SpawnerFormDefaults
	Input    input.Notebook
}

func NewNotebook(input input.Notebook) *Notebook {
	return &Notebook{
		Notebook: notebook.Notebook{
			ObjectMeta: metav1.ObjectMeta{
				Annotations: map[string]string{},
				Name:        input.Name,
				Namespace:   input.Namespace,
				Labels:      make(map[string]string),
			},
			Spec: notebook.NotebookSpec{
				Template: notebook.NotebookTemplateSpec{
					Spec: v1.PodSpec{
						Containers: []v1.Container{{
							Name: input.Name,
							Resources: v1.ResourceRequirements{
								Requests: v1.ResourceList{},
								Limits:   v1.ResourceList{},
							},
							VolumeMounts: make([]v1.VolumeMount, 0),
						}},
						Volumes: make([]v1.Volume, 0),
					},
				},
			}},
		Input: input,
		Defaults: common.LoadDefaults(
			config.Config.SpawnerConfigPath,
		).SpawnerFormDefaults,
	}
}

func (nb *Notebook) SetNotebookImage() *Notebook {
	var image string
	if nb.Input.Image == "" && nb.Input.CustomImage == "" {
		image = nb.Defaults.Image.Value
	} else {
		image = nb.Input.Image
	}
	nb.Notebook.Spec.Template.Spec.Containers[0].Image = image

	return nb
}

func (nb *Notebook) SetPullPolicy() *Notebook {
	var imagePullPolicy string
	if nb.Input.ImagePullPolicy == "" {
		imagePullPolicy = nb.Defaults.ImagePullPolicy.Value
	} else {
		imagePullPolicy = nb.Input.ImagePullPolicy
	}
	nb.Notebook.Spec.Template.Spec.Containers[0].ImagePullPolicy = v1.PullPolicy(imagePullPolicy)

	return nb
}

func (nb *Notebook) SetServerType() *Notebook {
	serverType := nb.Input.ServerType
	if serverType == "" {
		serverType = "jupyter"
	}
	rstudioHeader := fmt.Sprintf(
		"{\"X-RStudio-Root-Path\":\"/notebook/%s/%s/\"}",
		nb.Input.Namespace,
		nb.Input.Name,
	)
	nb.Notebook.ObjectMeta.Annotations[common.ServerTypeAnnotation] = serverType
	if serverType == "group-one" || serverType == "group-two" {
		nb.Notebook.ObjectMeta.Annotations[common.UriRewriteAnnotation] = "/"
	}
	if serverType == "group-two" {
		nb.Notebook.ObjectMeta.Annotations[common.HeadersAnnotation] = rstudioHeader
	}

	return nb
}

func (nb *Notebook) SetCPU() *Notebook {
	container := nb.Notebook.Spec.Template.Spec.Containers[0]

	var cpu string
	if nb.Input.CPU == "" {
		cpu = nb.Defaults.CPU.Value
	} else {
		cpu = nb.Input.CPU
	}
	container.Resources.Requests[v1.ResourceCPU] = resource.MustParse(cpu)

	// No explicit CPU limit
	if nb.Input.CPULimit == "" {
		return nb
	}
	container.Resources.Limits[v1.ResourceCPU] = resource.MustParse(nb.Input.CPULimit)

	return nb
}

func (nb *Notebook) SetMemory() *Notebook {
	container := nb.Notebook.Spec.Template.Spec.Containers[0]

	var memory string
	if nb.Input.Memory == "" {
		memory = nb.Defaults.Memory.Value
	} else {
		memory = nb.Input.Memory
	}
	container.Resources.Requests[v1.ResourceMemory] = resource.MustParse(memory)

	// No explicit memory limit
	if nb.Input.MemoryLimit == "" {
		return nb
	}
	container.Resources.Limits[v1.ResourceMemory] = resource.MustParse(nb.Input.MemoryLimit)

	return nb
}

func (nb *Notebook) SetGPUs() *Notebook {
	container := nb.Notebook.Spec.Template.Spec.Containers[0]

	var gpu common.GpusValue
	if &nb.Input.Gpus == nil {
		gpu = nb.Defaults.Gpus.Value
	} else {
		var vendors []common.Vendor
		for _, vendor := range nb.Input.Gpus.Vendors {
			vendors = append(vendors, common.Vendor{
				LimitsKey: vendor,
			})
		}

		gpu = common.GpusValue{
			Num:     nb.Input.Gpus.Num,
			Vendors: vendors,
			Vendor:  nb.Input.Gpus.Vendor,
		}
	}

	if gpu.Num == "none" {
		return nb
	}

	container.Resources.Limits[v1.ResourceName(gpu.Vendor)] = resource.MustParse(gpu.Num)

	return nb
}

func (nb *Notebook) SetTolerations() *Notebook {
	tolerationGroupKey := nb.Defaults.TolerationGroup.Value
	if tolerationGroupKey == "" {
		return nb
	}
	nbTolerations := nb.Notebook.Spec.Template.Spec.Tolerations
	tolerationGroups := nb.Defaults.TolerationGroup.Options

	for _, group := range tolerationGroups {
		if group.GroupKey != tolerationGroupKey {
			continue
		}
		var tolerations []v1.Toleration
		for _, toleration := range group.Tolerations {
			// lint:ignore SA4010 tolerations is appended to nbTolerations
			tolerations = append(tolerations, v1.Toleration{
				Key:      toleration.Key,
				Operator: v1.TolerationOperator(toleration.Operator),
				Value:    toleration.Value,
				Effect:   v1.TaintEffect(toleration.Effect),
			})
		}
		// lint:ignore SA4010 tolerations is append to nbTolerations
		nbTolerations = append(nbTolerations, tolerations...)
	}
	return nb
}

func (nb *Notebook) SetAffinity() *Notebook {
	affinityConfigKey := nb.Defaults.AffinityConfig.Value
	if affinityConfigKey == "" {
		return nb
	}
	spec := nb.Notebook.Spec.Template.Spec
	affinityConfigs := nb.Defaults.AffinityConfig.Options
	for _, afc := range affinityConfigs {
		if afc.ConfigKey != affinityConfigKey {
			continue
		}
		spec.Affinity = &afc.Affinity
		return nb
	}
	return nb
}

func (nb *Notebook) SetConfigurations() *Notebook {
	nbLabels := nb.Notebook.ObjectMeta.Labels
	labels := nb.Defaults.Configurations.Value

	for _, label := range labels {
		nbLabels[label.(string)] = "true"
	}

	return nb
}

func (nb *Notebook) AddNotebookVolume(wsV input.Datavolume) *Notebook {
	nb.Notebook.Spec.Template.Spec.Volumes = append(
		nb.Notebook.Spec.Template.Spec.Volumes,
		v1.Volume{
			Name: wsV.Name,
			VolumeSource: v1.VolumeSource{
				PersistentVolumeClaim: &v1.PersistentVolumeClaimVolumeSource{
					ClaimName: wsV.Name,
				}},
		})
	nb.Notebook.Spec.Template.Spec.Containers[0].VolumeMounts = append(
		nb.Notebook.Spec.Template.Spec.Containers[0].VolumeMounts,
		v1.VolumeMount{
			Name:      wsV.Name,
			MountPath: strings.Replace(wsV.TemplatedPath, "{volume-name}", wsV.Name, 1),
		})

	return nb
}

func (nb *Notebook) CreateDataVolumes() *Notebook {
	for _, volume := range nb.Input.Datavols {
		if volume.Type == "New" {
			// Create PVC
			_, _ = pvcs.CreatePVC(volume, nb.Notebook.Namespace)
			nb = nb.AddNotebookVolume(volume)
		}
	}
	return nb
}

func (nb *Notebook) SetSHM() *Notebook {
	if !nb.Input.Shm {
		return nb
	}
	spec := nb.Notebook.Spec.Template.Spec
	container := nb.Notebook.Spec.Template.Spec.Containers[0]

	shmVol := v1.Volume{
		Name: "dshm",
		VolumeSource: v1.VolumeSource{
			EmptyDir: &v1.EmptyDirVolumeSource{
				Medium: v1.StorageMediumMemory,
			},
		},
	}
	spec.Volumes = append(spec.Volumes, shmVol)

	shmMount := v1.VolumeMount{
		MountPath: "/dev/shm",
		Name:      "dshm",
	}
	container.VolumeMounts = append(container.VolumeMounts, shmMount)

	return nb
}
