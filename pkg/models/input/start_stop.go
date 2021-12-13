package input

// StartStop is the struct that represents the unmarshalled input
// body for the notebooks patch endpoint
type StartStop struct {
	Stopped bool `json:"stopped,omitempty"`
}
