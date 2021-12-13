package common

import (
	"encoding/json"
	"os"

	v1 "k8s.io/api/core/v1"
	"sigs.k8s.io/yaml"
)

const (
	ServerTypeAnnotation    = "notebooks.kubeflow.org/server-type"
	HeadersAnnotation       = "notebooks.kubeflow.org/http-headers-request-set"
	UriRewriteAnnotation    = "notebooks.kubeflow.org/http-rewrite-uri"
	NgninxRewriteAnnotation = "nginx.ingress.kubernetes.io/rewrite-target"
)


// LoadDefaults reads in a config for notebook defaults,
// usually spawner_ui_config.yaml.
func LoadDefaults(path string) NotebookDefaults {
	bytes, err := os.ReadFile(path)
	if err != nil {
		panic(err)
	}
	config, err := yaml.YAMLToJSON(bytes)
	if err != nil {
		panic(err)
	}
	defaults, err := UnmarshalNotebookDefaults(config)
	if err != nil {
		panic(err)
	}
	return defaults
}

func UnmarshalNotebookDefaults(data []byte) (NotebookDefaults, error) {
	var r NotebookDefaults
	err := yaml.Unmarshal(data, &r)
	return r, err
}

func (r *NotebookDefaults) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type NotebookDefaults struct {
	SpawnerFormDefaults SpawnerFormDefaults `json:"spawnerFormDefaults"`
}

type SpawnerFormDefaults struct {
	Image            Image           `json:"image"`
	ImageGroupOne    ImageGroup      `json:"imageGroupOne"`
	ImageGroupTwo    ImageGroup      `json:"imageGroupTwo"`
	HideRegistry     bool            `json:"hideRegistry"`
	HideTag          bool            `json:"hideTag"`
	AllowCustomImage bool            `json:"allowCustomImage"`
	ImagePullPolicy  ImagePullPolicy `json:"imagePullPolicy"`
	CPU              CPU             `json:"cpu"`
	Memory           CPU             `json:"memory"`
	Environment      Environment     `json:"environment"`
	WorkspaceVolume  WorkspaceVolume `json:"workspaceVolume"`
	DataVolumes      Configurations  `json:"dataVolumes"`
	Gpus             Gpus            `json:"gpus"`
	AffinityConfig   AffinityConfig  `json:"affinityConfig"`
	TolerationGroup  TolerationGroup `json:"tolerationGroup"`
	Shm              Shm             `json:"shm"`
	Configurations   Configurations  `json:"configurations"`
}

type Image struct {
	Value    string   `json:"value"`
	Options  []string `json:"options"`
	ReadOnly bool     `json:"readOnly"`
}

type CPU struct {
	Value       string `json:"value"`
	LimitFactor string `json:"limitFactor"`
	ReadOnly    bool   `json:"readOnly"`
}

type Configurations struct {
	Value    []interface{} `json:"value"`
	ReadOnly bool          `json:"readOnly"`
}

type Environment struct {
	Value    EnvironmentValue `json:"value"`
	ReadOnly bool             `json:"readOnly"`
}

type EnvironmentValue struct {
}

type Gpus struct {
	Value    GpusValue `json:"value"`
	ReadOnly bool      `json:"readOnly"`
}

type GpusValue struct {
	Num     string   `json:"num"`
	Vendors []Vendor `json:"vendors"`
	Vendor  string   `json:"vendor"`
}

type Vendor struct {
	LimitsKey string `json:"limitsKey"`
	UIName    string `json:"uiName"`
}

type ImageGroup struct {
	Value   string   `json:"value"`
	Options []string `json:"options"`
}

type ImagePullPolicy struct {
	Value    string `json:"value"`
	ReadOnly bool   `json:"readOnly"`
}

type Shm struct {
	Value    bool `json:"value"`
	ReadOnly bool `json:"readOnly"`
}

type WorkspaceVolume struct {
	Value WorkspaceVolumeValue `json:"value"`
}

type WorkspaceVolumeValue struct {
	Type        ImagePullPolicy `json:"type"`
	Name        ImagePullPolicy `json:"name"`
	Size        ImagePullPolicy `json:"size"`
	MountPath   ImagePullPolicy `json:"mountPath"`
	AccessModes ImagePullPolicy `json:"accessModes"`
	Class       ImagePullPolicy `json:"class"`
}

type TolerationGroup struct {
	Value    string   `json:"value"`
	Options  []Option `json:"options"`
	ReadOnly bool     `json:"readOnly"`
}

type Option struct {
	GroupKey    string       `json:"groupKey"`
	DisplayName string       `json:"displayName"`
	Tolerations []Toleration `json:"tolerations"`
}

type Toleration struct {
	Key      string `json:"key"`
	Operator string `json:"operator"`
	Value    string `json:"value"`
	Effect   string `json:"effect"`
}

type AffinityConfig struct {
	Value    string           `json:"value"`
	Options  []AffinityOption `json:"options"`
	ReadOnly bool             `json:"readOnly"`
}

type AffinityOption struct {
	ConfigKey   string      `json:"configKey"`
	DisplayName string      `json:"displayName"`
	Affinity    v1.Affinity `json:"affinity"`
}
