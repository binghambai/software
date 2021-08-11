package middeWare

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Cors() gin.HandlerFunc {
	return func(context *gin.Context) {
		context.Writer.Header().Set("Access-Control-Allow-Origin","*")   //这是前端服务的地址，注意这一行不使用“*”
		context.Writer.Header().Set("Access-Control-Max-Age","86400")
		context.Writer.Header().Set("Access-Control-Allow-Methods","*")
		context.Writer.Header().Set("Access-Control-Allow-Headers","*")
		context.Writer.Header().Set("Access-Control-Allow-Credentials","true")
		if context.Request.Method =="OPTIONS" {
			context.AbortWithStatus(http.StatusOK)
		}
		context.Next()
	}
}
