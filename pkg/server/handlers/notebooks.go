package handlers

import (
	"net/http"

	"github.com/Striveworks/kubego-notebooks/pkg/models/input"
	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	"github.com/Striveworks/kubego-notebooks/pkg/resources/notebooks"
	"github.com/gin-gonic/gin"
)

// GetNotebooks godoc
// @Description Get Notebooks
// @Tags Notebooks
// @Param namespace path string true "Namespace"
// @Produce json
// @Success 200 {object} output.Notebooks
// @Router /namespaces/{namespace}/notebooks [get]
func GetNotebooks(c *gin.Context) {
	namespace := c.Param("namespace")
	notebookList, err := notebooks.ListNotebooks(namespace)
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	outputs := notebooks.NotebookListReponse(notebookList)
	c.JSON(http.StatusOK, output.Notebooks{Notebooks: outputs})
}

// GetNotebook godoc
// @Description Get Notebook
// @Tags Notebooks
// @Param namespace path string true "Namespace"
// @Param notebook path string true "Notebook"
// @Produce json
// @Success 200 {object} output.Notebook
// @Router /namespaces/{namespace}/notebooks/{notebook} [get]
func GetNotebook(c *gin.Context) {
	namespace := c.Param("namespace")
	notebookName := c.Param("notebook")
	notebook, err := notebooks.GetNotebook(namespace, notebookName)
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	output := notebooks.NotebookResponse(notebook)
	c.JSON(http.StatusOK, output)
}

// CreateNotebook godoc
// @Description Create Notebook
// @Tags Notebooks
// @Accept json
// @Produce json
// @Param namespace path string true "Namespace"
// @Param body body input.Notebook true "Notebook info"
// @Success 201
// @Router /namespaces/{namespace}/notebooks [post]
func CreateNotebook(c *gin.Context) {
	var input input.Notebook
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, err)
	}
	_, err := notebooks.CreateNotebook(input)
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	c.Status(http.StatusCreated)
}

// DeleteNotebook godoc
// @Description Delete Notebook
// @Tags Notebooks
// @Param namespace path string true "Namespace"
// @Param notebook path string true "Notebook"
// @Success 204
// @Router /namespaces/{namespace}/{notebook} [delete]
func DeleteNotebook(c *gin.Context) {
	namespace := c.Param("namespace")
	notebookName := c.Param("notebook")
	err := notebooks.DeleteNotebook(notebookName, namespace)
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	c.Status(http.StatusNoContent)
}

// PatchNotebook godoc
// @Description Patch Notebook
// @Tags Notebooks
// @Param namespace path string true "Namespace"
// @Param notebook path string true "Notebook"
// @Param body body input.StartStop true "Notebook info"
// @Success 200
// @Router /namespaces/{namespace}/{notebook} [patch]
func PatchNotebook(c *gin.Context) {
	namespace := c.Param("namespace")
	notebookName := c.Param("notebook")
	notebook, err := notebooks.GetNotebook(namespace, notebookName)
	if err != nil {
		panic(err)
	}
	var input input.StartStop
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, err)
	}
	err = notebooks.StartStopNotebook(input, notebook)
	if err != nil {
		ouput := output.ErrorResponse(err.Error())
		c.JSON(http.StatusInternalServerError, ouput)
	}
	c.Status(http.StatusOK)
}
