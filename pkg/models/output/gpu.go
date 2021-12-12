package output

// GPUVendors is the struct that represents the unmarshalled ouput
// body for the get gpus endpoint
type GPUVendors struct {
	Vendors []string `json:"vendors"`
}
