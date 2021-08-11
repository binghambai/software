package main

import (
	"fmt"
	r"software/rounter"
)

func main() {

	//获得引擎
	engine := r.Routers()
	//启动服务器
	err := engine.Run(":9000")
	if err != nil {
		fmt.Printf("Serve running has error: %v \n", err)
	}
}
