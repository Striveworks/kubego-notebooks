package router

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/Striveworks/kubego-notebooks/config"
	docs "github.com/Striveworks/kubego-notebooks/docs"
	"github.com/Striveworks/kubego-notebooks/pkg/server/handlers"
	"github.com/Striveworks/kubego-notebooks/pkg/server/middleware"
	"github.com/gin-gonic/gin"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func CreateRouter() *gin.Engine {

	r := gin.Default()

	// Global Middleware
	if config.Config.CORS.Enabled {
		r.Use(middleware.CORSMiddleware())
	}

	docs.SwaggerInfo.BasePath = config.Config.Server.ApiPrefix

	// API V1 Grouping
	v1 := r.Group(config.Config.Server.ApiPrefix)

	// Healthcheck Endpoints
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	// GET
	v1.GET("/namespaces", handlers.GetNamespaces)
	v1.GET("/namespaces/:namespace/pvcs", handlers.GetPVCs)
	v1.GET("/namespaces/:namespace/notebooks", handlers.GetNotebooks)
	v1.GET("/namespaces/:namespace/notebooks/:notebook", handlers.GetNotebook)
	v1.GET("/config", handlers.GetConfig)
	v1.GET("/storageclasses", handlers.GetStorageClasses)
	v1.GET("/storageclasses/default", handlers.GetDefaultStorageClass)
	v1.GET("/gpus", handlers.GetGPUVendors)
	v1.GET("/namespaces/:namespace/poddefaults", handlers.GetPodDefaults)

	// POST
	v1.POST("/namespaces/:namespace/notebooks", handlers.CreateNotebook)

	// DELETE
	v1.DELETE("/namespaces/:namespace/notebooks/:notebook", handlers.DeleteNotebook)

	// PATCH
	v1.PATCH("/namespaces/:namespace/notebooks/:notebook", handlers.PatchNotebook)

	// Static Content
	r.StaticFile("/", "./static/index.html")
	r.GET("/:path", func(c *gin.Context) {
		c.Status(200)
	})
	r.Static("/static", "./static")

	if config.Config.Ingress.Create {
		// Notebook redirect
		r.GET("/notebook/*path", func(c *gin.Context) {
			serverType := c.Query("server")
			host := strings.Split(c.Request.URL.Path, "/")[3] + config.Config.Ingress.Domain
			scheme := "http"
			if config.Config.Ingress.Tls {
				scheme = "https"
			}
			path := c.Request.URL.Path
			if serverType != "jupyter" {
				path = "/"
			}
			c.Redirect(http.StatusTemporaryRedirect, fmt.Sprintf("%s://%s%s", scheme, host, path))
		})
	}

	// Swagger Endpoints
	config := &ginSwagger.Config{
		URL: "./swagger/doc.json",
	}
	r.GET("/swagger/*any", ginSwagger.CustomWrapHandler(config, swaggerfiles.Handler))

	return r
}
