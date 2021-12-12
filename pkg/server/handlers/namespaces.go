package handlers

import (
	"net/http"

	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	"github.com/Striveworks/kubego-notebooks/pkg/resources/namespaces"
	"github.com/gin-gonic/gin"
)

// GetNamespaces godoc
// @Description Get Namespaces
// @Tags Namespaces
// @Produce json
// @Success 200 {object} []output.Namespace
// @Router /namespaces [get]
func GetNamespaces(c *gin.Context) {
	namespaceList, err := namespaces.ListNamespaces()
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	output := namespaces.NamespaceListResponse(namespaceList)
	c.JSON(http.StatusOK, output)
}
