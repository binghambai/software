package service

import (
	"fmt"
	read "software/readFiles"
	fi "software/service/reponse"
	"strings"
)

//处理获取的文件内容
func ProcessFiles(dir string) *fi.FileInfoResponse{

	fmt.Println("dir is ..........", dir)

	//路径拼接
	//path := "D:/Go/PROJECT/src/software/mirrors" + dir
	path := "/root/go/mirrors" + dir
	fmt.Println("path is :", path)
	files := read.GetFiles(path)
	//fmt.Println(files)
	//说明是一个文件需要下载
	//预先构造返回体
	res := fi.FileInfoResponse{}
	if files == nil {
		//下载文件
		fmt.Printf("下载文件")
		res.FileInfos = nil
	}else {


		respList := make([]fi.FileInfo, 0)
		for _, f := range *files {
			fileInfo := &fi.FileInfo{
				Name: f.Name(),
				Size: f.Size(),
				Time: f.ModTime().Format("2006-01-02 15:04:05 Mon"),
				IsDir: f.IsDir(),
				Url: "/mirrors" +  dir + "/" + f.Name(),
			}
			respList = append(respList, *fileInfo)
		}
		res.FileInfos = respList
	}

	//获取当前请求文件的上一级目录
	if dir == "/" || dir == "" {
		res.LastDir = "/"
		return &res
	}
	res.LastDir  = read.GetListDir(dir)
	fmt.Println(res)
	return &res

}

func GetFilesList(dir, httpUrl string)  *fi.CurDirResp{
	//路径拼接
	path := "./mirrors" + dir
	fmt.Println(path)
	files := read.GetFiles(path)
	if files == nil {
		return nil
	}
	resp := &fi.CurDirResp{}

	tmpS :=	strings.Split(httpUrl, "/")
	preUrl := strings.Join(tmpS[:len(tmpS)-2], "/") + "/"
	resp.PreUrl = preUrl

	fileInfos := make([]fi.Files, 0)
	//如果不是请求首页，多返回一笑上一级目录的信息  名为： ...
	if httpUrl != "/api/mirrors/" {
		fileInfos = append(fileInfos, fi.Files{
			Name:  "...",
			Size:  0,
			Date:  "...",
			IsDir: true,
			Url:   preUrl,
		})
	}
	for _, v := range *files {
		tmpFile := &fi.Files{
			Name: v.Name(),
			Size:   v.Size(),
			Date:   v.ModTime().Format("2006-01-02 15:04:05"),
			IsDir:  v.IsDir(),

		}
		// 填入url的全目录名
		if v.IsDir() {
			tmpFile.Url = "/api/mirrors" + dir + v.Name() + "/"
		}else {
			tmpFile.Url = "/api/mirrors" + dir + v.Name()
		}
		fileInfos = append(fileInfos, *tmpFile)
	}

	resp.FilesInfo = fileInfos
	return resp
}