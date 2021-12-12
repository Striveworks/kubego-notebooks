package notebooks

const (
	Ready        Phase = "ready"
	Waiting      Phase = "waiting"
	Warning      Phase = "warning"
	Error        Phase = "error"
	Uninitialize Phase = "uninitialized"
	Unavailable  Phase = "unavailable"
	Terminating  Phase = "terminating"
	Stopped      Phase = "stopped"
)

type Phase string

type Status struct {
	Phase   Phase
	Message string
	State   string
}

// CreateStatus creates a Status given a phase, message, and state.
func CreateStatus(phase Phase, message string, state string) Status {
	s := Status{}
	s.Phase, s.Message, s.State = phase, message, state
	return s
}
