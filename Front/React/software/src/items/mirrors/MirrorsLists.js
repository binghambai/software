import React, {Component} from "react";

import axios from "axios";
import {Tooltip, Whisper} from "rsuite";
import { toast } from 'react-toastify';

import 'rsuite/dist/styles/rsuite-default.css';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/mirrorsList.css'
import '../../css/middleHeader.css'

toast.configure()
export default class MirrorsLists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filesInfo: [],   //文件列表
            searchValue: ''  //同步了的输入框内容
        }
    }

    inputChange(e) {
        this.setState({
            searchValue: e.target.value
        })
    }

    componentDidMount() {
        axios.get("/api/mirrors/").then(resp => {
            this.setState({
                // initReqCount: 1,
                filesInfo: resp.data.filesInfo
            })
        }).catch(err =>{
            console.log(err)
        })

    }

    openDir(item) {
        if(!item.isDir) {
            //需要下载
            this.download(item.url, item.name)
            return
        }
        axios.get(item.url).then(resp => {
            this.setState({
                searchValue:'',  // 清空搜索框，注意刷新时机
                filesInfo: resp.data.filesInfo
            })
        }).catch(err =>{
            console.log("in open dir, server has err")
        })
    }

    download (url, fileName) {
        fetch('/java/download2?path=' + url + '&fileName='+fileName)
            .then(res => {
                if(res.ok){
                    res.blob().then(blob => {
                        let a = document.createElement('a');
                        let url = window.URL.createObjectURL(blob);
                        let filename = res.headers.get('Content-Disposition');
                        if (filename) {
                            filename = filename.split('=')[1]
                            a.href = url;
                            a.download = filename; //给下载下来的文件起个名字
                            a.click();
                            window.URL.revokeObjectURL(url);
                            a = null;
                        }
                    })
                    toast('🦄 下载成功!', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.error('🦄 下载失败!', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }).catch(err => {
                console.log("in download, server has err!")
        })
    }

    render() {
        let sv = this.state.searchValue
        let newList = []  // 存放筛选结果
        let tmpList = [] // 最终显示使用的结果
        if(sv !== '') {
            this.state.filesInfo.map(o => {
                if (o.name.indexOf(sv) !== -1) {
                    newList.push(o)
                }
            })
            tmpList = newList
        } else {
            tmpList = this.state.filesInfo
        }
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-md-8">

                            <h3 className="h3-title">
                                <span id="span-title-icon" className="glyphicon glyphicon-save-file"/>
                                镜像列表</h3>
                        </div>
                        <div className="col-md-4">
                            <input type="text" id="id-form-control" className="form-control" placeholder="Search for..."
                                   value={this.state.searchValue}
                                   onChange={(e) => {this.inputChange(e)} }
                            />
                        </div>

                    </div>
                    <div id="row-mirrors-name" className="row">
                        <div className="col-md-4">
                            <h4 className="h3-title">Name</h4>
                        </div>
                        <div className="col-md-4"/>
                        <div className="col-md-4">
                            <h4 className="h3-title">Date</h4>
                        </div>
                    </div>
                </div>

                <div className="mirrorsList">
                    <table>
                        {
                            tmpList.map((item) => {
                                return (
                                    <tr className="tr" onClick={this.openDir.bind(this, item)}>
                                        <td className="td-name">
                                            <Whisper placement="right" trigger="hover" speaker={
                                                <Tooltip>
                                                    <i>{item.name === '...' ? 'Return to the last level' : item.name}</i>
                                                </Tooltip>
                                            }>
                                                <a
                                                >{item.name}</a>
                                            </Whisper>
                                        </td>
                                        <td className={item.date === '...' ? "td-date-none" : "td-date"}>{item.date !== '...' ? item.date : ""}</td>
                                    </tr>

                                )
                            })
                        }

                    </table>
                </div>
            </div>
        );
    }


}
