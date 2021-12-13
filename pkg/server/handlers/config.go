package handlers

import (
	"net/http"

	"github.com/Striveworks/kubego-notebooks/config"
	"github.com/Striveworks/kubego-notebooks/pkg/common"
	"github.com/Striveworks/kubego-notebooks/pkg/models/output"
	"github.com/gin-gonic/gin"
)

// GetConfig godoc
// @Description Get Config
// @Tags Config
// @Produce json
// @Success 200 {object} output.Config
// @Router /config [get]
func GetConfig(c *gin.Context) {
	config := common.LoadDefaults(config.Config.SpawnerConfigPath)
	c.JSON(http.StatusOK, output.Config{
		Config: config.SpawnerFormDefaults,
	})
}
