package input

// Notebook is the struct that represents the unmarshalled input
// body for the notebooks create endpoint
type Notebook struct {
	Name             string        `json:"name,omitempty"`
	Namespace        string        `json:"namespace,omitempty"`
	Image            string        `json:"image,omitempty"`
	AllowCustomImage bool          `json:"allowCustomImage,omitempty"`
	ImagePullPolicy  string        `json:"imagePullPolicy,omitempty"`
	CustomImage      string        `json:"customImage,omitempty"`
	CustomImageCheck bool          `json:"customImageCheck,omitempty"`
	ServerType       string        `json:"serverType,omitempty"`
	CPU              string        `json:"cpu,omitempty"`
	CPULimit         string        `json:"cpuLimit,omitempty"`
	Memory           string        `json:"memory,omitempty"`
	MemoryLimit      string        `json:"memoryLimit,omitempty"`
	Gpus             Gpus          `json:"gpus,omitempty"`
	NoWorkspace      bool          `json:"noWorkspace,omitempty"`
	Workspace        Datavolume    `json:"workspace,omitempty"`
	AffinityConfig   string        `json:"affinityConfig,omitempty"`
	TolerationGroup  string        `json:"tolerationGroup,omitempty"`
	Datavols         []Datavolume  `json:"datavols,omitempty"`
	Shm              bool          `json:"shm,omitempty"`
	Configurations   []interface{} `json:"configurations,omitempty"`
}

type Datavolume struct {
	Type          string      `json:"type,omitempty"`
	Name          string      `json:"name,omitempty"`
	TemplatedName string      `json:"templatedName,omitempty"`
	TemplatedPath string      `json:"templatedPath,omitempty"`
	Size          string      `json:"size,omitempty"`
	Path          *string     `json:"path,omitempty,omitempty"`
	Mode          string      `json:"mode,omitempty"`
	Class         string      `json:"class,omitempty"`
	ExtraFields   ExtraFields `json:"extraFields,omitempty"`
}

type ExtraFields struct {
}

type Gpus struct {
	Num     string   `json:"num,omitempty"`
	Vendors []string `json:"vendors,omitempty"`
	Vendor  string   `json:"vendor,omitempty"`
}
