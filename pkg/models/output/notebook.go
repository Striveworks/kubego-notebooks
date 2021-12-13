package output

// Notebooks is the struct that represents the unmarshalled ouput
// body for the get notebooks endpoint
type Notebooks struct {
	Notebooks []Notebook `json:"notebooks"`
}

type Notebook struct {
	Age        string   `json:"age"`
	CPU        string   `json:"cpu"`
	Gpus       Gpus     `json:"gpus"`
	Image      string   `json:"image"`
	Memory     string   `json:"memory"`
	Name       string   `json:"name"`
	Namespace  string   `json:"namespace"`
	ServerType string   `json:"serverType"`
	ShortImage string   `json:"shortImage"`
	Status     Status   `json:"status"`
	Volumes    []string `json:"volumes"`
}

type Gpus struct {
	Count   int64  `json:"count"`
	Message string `json:"message"`
}

type Status struct {
	Message string `json:"message"`
	Phase   string `json:"phase"`
	State   string `json:"state"`
}
