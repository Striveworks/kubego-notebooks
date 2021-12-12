package handlers

import (
	"net/http"

	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	"github.com/Striveworks/kubego-notebooks/pkg/resources/poddefaults"
	"github.com/gin-gonic/gin"
)

// GetPodDefaults godoc
// @Description Get pod defaults
// @Tags Defaults
// @Param namespace path string true "Namespace"
// @Produce json
// @Success 200 {object} output.PodDefaults
// @Router /namespaces/{namespace}/poddefaults [get]
func GetPodDefaults(c *gin.Context) {
	namespace := c.Param("namespace")
	podDefaults, err := poddefaults.GetPodDefaults(namespace)
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	output := poddefaults.PodDefaultsResponse(podDefaults)
	c.JSON(http.StatusOK, output)

}
