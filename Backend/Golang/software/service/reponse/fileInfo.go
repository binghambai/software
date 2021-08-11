package reponse

//文件信息的结构体
type FileInfo struct {
	Name string   `json:"name"`    // 文件夹或目录
	Size int64     `json:"size"`   // 文件大小
	Time string 	`json:"time"`// 最后修改时间
	IsDir bool     `json:"isDir"`   // 是否为目录
	Url string		`json:"url"` //当前Url
	//BackUrl	string		`json:"back_url"` //上一级目录
}

type FileInfoResponse struct {
	LastDir   string   `json:"lastDir"`
	FileInfos []FileInfo `json:"fileInfo"`
}


type Files struct {
	Name string `json:"name"`
	Size int64 `json:"size"`
	Date string `json:"date"`
	IsDir bool `json:"isDir"`
	Url string `json:"url"`
}

type CurDirResp struct {
	FilesInfo [] Files `json:"filesInfo"`
	PreUrl string `json:"preUrl"`
}