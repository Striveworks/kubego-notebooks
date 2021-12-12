package gpus

import (
	"github.com/Striveworks/kubego-notebooks/config"
	"github.com/Striveworks/kubego-notebooks/pkg/adapters"
	"github.com/Striveworks/kubego-notebooks/pkg/common"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// GetGPUVendors queries the cluster for all gpu vendors.
// That list is intersected with the vendors defined in
// defaults and returned.
func GetGPUVendors() []string {
	defaults := common.LoadDefaults(
		config.Config.SpawnerConfigPath,
	)
	// Construct list of vendors from config
	var vendorKeys []string
	for _, vendor := range defaults.SpawnerFormDefaults.Gpus.Value.Vendors {
		vendorKeys = append(vendorKeys, vendor.LimitsKey)
	}
	// List of nodes in cluster
	nodes, _ := adapters.K8sClient.
		CoreV1().
		Nodes().
		List(metav1.ListOptions{})
	// Create unique intersection of node vendors and config vendors
	var availableVendorKeys []string
	for _, node := range nodes.Items {
		for _, v := range vendorKeys {
			if _, ok := node.Status.Capacity[v1.ResourceName(v)]; ok {
				availableVendorKeys = appendIfMissing(availableVendorKeys, v)
			}

		}
	}
	return availableVendorKeys
}

// appendIfMissing checks a slice of strings for a given string
// if the string is missing, it appends it
func appendIfMissing(slice []string, i string) []string {
	for _, ele := range slice {
		if ele == i {
			return slice
		}
	}
	return append(slice, i)
}
