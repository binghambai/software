package readFiles

import (
	"fmt"
	"io/fs"
	"io/ioutil"
	"os"
	"strings"
)


func GetFiles(dir string) *[]fs.FileInfo{

	//判断路径是否是一个文件
	f, err := os.Stat(dir)
	if err != nil {
		fmt.Println("os stat has err:", err)
		return  nil
	}else {
		if !f.IsDir() {
			//是一个文件
			return nil
		}
	}

	// 读取当前目录中的所有文件和子目录
	files, err := ioutil.ReadDir(dir)
	if err != nil {
		fmt.Println("ioutil.read has error")
		panic(err)
	}
	return &files
}


//返回当前目录的上一个
func GetListDir(dir string) string {
	//fmt.Println(dir)
	//删除末尾的"/"，不然会有Bug
	resString := strings.TrimSuffix(dir, "/")
	//fmt.Println(resString)

	suffix := strings.Split(resString, "/")
	//fmt.Println(suffix)

	resString = strings.TrimSuffix(resString, "/"+suffix[len(suffix)-1])
	//fmt.Println("GetListDir is ...:", resString)
	if len(resString) < 1 || resString == "" {
		return "/mirrors"
	}
	return  "/mirrors"+ resString
}