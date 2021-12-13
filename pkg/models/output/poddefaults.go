package output

// PodDefaults is the struct that represents the unmarshalled ouput
// body for the get poddefaults endpoint
type PodDefaults struct {
	PodDefaults []PodDefault `json:"poddefaults"`
}

type PodDefault struct {
	Label string `json:"label"`
	Desc  string `json:"desc"`
}
