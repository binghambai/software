import React, {Component} from 'react'
import axios from "axios";
import '../css/mirrorsList.css'
import { Tooltip, Whisper, ButtonToolbar,Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default class MirrorsList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            filesInfo: [],   //文件列表
        }
    }

    componentDidMount() {

        axios.get("/api/mirrors/").then(resp => {

            this.setState({
                initReqCount: 1,
                filesInfo: resp.data.filesInfo
            })
        }).catch(err =>{
            console.log(err)
        })

    }

    openDir(item) {
        if(!item.isDir) {
            //需要下载
            console.log('download')

            this.download(item.path, item.name)
            toast('🦄 下载成功!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        axios.get(item.url).then(resp => {
            this.setState({
                filesInfo: resp.data.filesInfo
            })
        }).catch(err =>{
            console.log(err)
        })
    }

    download (path, fileName) {
        fetch('/java/download2?path=' + path + '&fileName='+fileName)
            .then(res => {
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
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        let sv = this.props.search
        let newList = []
        if (sv !== '') {
            this.state.filesInfo.map(o => {
                if(o.name === '...') {
                    newList.unshift(o)
                }
                if (o.name.indexOf(sv) !== -1) {
                    newList.push(o)
                }
            })
            console.log('new conslog:', newList)
            return (
                <div className="mirrorsList">
                    <table>
                        {
                            newList.map((item) => {
                                return (
                                    <tr className="tr" onClick={this.openDir.bind(this, item)}>
                                        <td className="td-name">
                                            <Whisper placement="right" trigger="hover" speaker={
                                                <Tooltip>
                                                    <i>{item.name === '...' ? 'Return to the last level' : item.name}</i>
                                                </Tooltip>
                                            }>
                                                <a
                                                >
                                                    {item.name}</a>
                                            </Whisper>
                                        </td>
                                        <td className={item.date === '...' ? "td-date-none" : "td-date"}>{item.date !== '...' ? item.date : ""}</td>
                                    </tr>

                                )
                            })
                        }

                    </table>
                </div>
            )
        } else {
            return (
                <div className="mirrorsList">
                    <table>
                        {
                            this.state.filesInfo.map((item) => {
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
            )
        }
    }
}
