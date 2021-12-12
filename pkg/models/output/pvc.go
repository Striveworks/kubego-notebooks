package output

// PVCs is the struct that represents the unmarshalled ouput
// body for the get pvcs endpoint
type PVCs struct {
	PVCS []PVC `json:"pvcs"`
}

type PVC struct {
	Name      string `json:"name"`
	Namespace string `json:"namespace"`
	Size      string `json:"size"`
	Mode      string `json:"mode"`
	Class     string `json:"class"`
}
