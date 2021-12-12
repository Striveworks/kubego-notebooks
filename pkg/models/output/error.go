package output

// Error is the struct that represents the unmarshalled ouput
// body for the any error responses
type Error struct {
	Message string `json:"log"`
}

func ErrorResponse(message string) Error {
	return Error{
		Message: message,
	}
}
