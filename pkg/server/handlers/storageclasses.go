package handlers

import (
	"net/http"

	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	"github.com/Striveworks/kubego-notebooks/pkg/resources/storageclasses"
	"github.com/gin-gonic/gin"
)

// GetStorageClasses godoc
// @Description Get storage classes
// @Tags StorageClasses
// @Produce json
// @Success 200 {object} []output.StorageClass
// @Router /storageclasses [get]
func GetStorageClasses(c *gin.Context) {
	storageClassList, err := storageclasses.ListStorageClasses()
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	output := storageclasses.StorageClassListResponse(storageClassList)
	c.JSON(http.StatusOK, output)
}

// GetDefaultStorageClass godoc
// @Description Get default storage class
// @Tags StorageClasses
// @Produce json
// @Success 200 {object} output.DefaultStorageClass
// @Router /storageclasses/default [get]
func GetDefaultStorageClass(c *gin.Context) {
	storageClass, err := storageclasses.GetDefaultStorageClass()
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	c.JSON(http.StatusOK, output.DefaultStorageClass{
		DefaultStorageClass: storageClass,
	})
}
