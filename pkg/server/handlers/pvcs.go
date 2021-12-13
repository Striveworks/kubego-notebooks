package handlers

import (
	"net/http"

	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	"github.com/Striveworks/kubego-notebooks/pkg/resources/pvcs"
	"github.com/gin-gonic/gin"
)

// GetPVCs godoc
// @Description Get pvcs
// @Tags PVCs
// @Param namespace path string true "Namespace"
// @Produce json
// @Success 200 {object} output.PVCs
// @Router /namespaces/{namespace}/pvcs [get]
func GetPVCs(c *gin.Context) {
	namespace := c.Param("namespace")
	pvcList, err := pvcs.ListPVCs(namespace)
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	output := pvcs.PVCListResponse(pvcList)
	c.JSON(http.StatusOK, output)
}
