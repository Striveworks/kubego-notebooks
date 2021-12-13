package middleware

import (
	"github.com/Striveworks/kubego-notebooks/config"
	"github.com/gin-gonic/gin"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", config.Config.CORS.AccessControlAllowOrigin)
		c.Header("Access-Control-Allow-Credentials", config.Config.CORS.AccessControlAllowCredentials)
		c.Header("Access-Control-Allow-Headers", config.Config.CORS.AccessControlAllowHeaders)
		c.Header("Access-Control-Allow-Methods", config.Config.CORS.AccessControlAllowHeaders)
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
