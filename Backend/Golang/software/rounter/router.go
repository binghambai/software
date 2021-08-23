package rounter

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"software/middeWare"
	"software/service"
)


func Routers() *gin.Engine{
	//获取引擎
	r := gin.Default()
	r.Use(middeWare.Cors())
	r.GET("/api/mirrors1/*paths", func(c *gin.Context) {
		//获取mirrors后面的目录
		dir := c.Param("paths")

		respList := service.ProcessFiles(dir)
		c.JSON(http.StatusOK, respList)
	})

	r.GET("/api/mirrors/*paths", func(c *gin.Context) {
		dir := c.Param("paths")
		//fmt.Println(dir[len(dir)-1])
		if dir[len(dir)-1] != 47 {  // 末尾不是/ 字符，就提示信息并返回
			c.JSON(http.StatusMethodNotAllowed, gin.H{
				"message": "url has error, loss a str '/'",
			})
			return
		}
		resp := service.GetFilesList(dir, c.Request.URL.Path)
		c.JSON(http.StatusOK, resp)
	})
	return r
}
