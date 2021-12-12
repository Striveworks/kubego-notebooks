package output

type StorageClass string

// DefaultStorageClass is the struct that represents the unmarshalled ouput
// body for the get defaultstorageclass endpoint
type DefaultStorageClass struct {
	DefaultStorageClass string `json:"defaultStorageClass"`
}
