package handlers

import (
	"net/http"

	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	"github.com/Striveworks/kubego-notebooks/pkg/resources/gpus"
	"github.com/gin-gonic/gin"
)

// GetGPUVendors godoc
// @Description Get GPU vendors
// @Tags GPUS
// @Produce json
// @Success 200 {object} output.GPUVendors
// @Router /gpus [get]
func GetGPUVendors(c *gin.Context) {
	vendorList := gpus.GetGPUVendors()
	c.JSON(http.StatusOK, output.GPUVendors{
		Vendors: vendorList,
	})
}
