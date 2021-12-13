package output

import "github.com/Striveworks/kubego-notebooks/pkg/common"

// Config is the struct that represents the unmarshalled ouput
// body for the get config endpoint
type Config struct {
	Config common.SpawnerFormDefaults `json:"config"`
}
