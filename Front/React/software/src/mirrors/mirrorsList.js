import React, {Component} from 'react'
import axios from "axios";
import '../css/mirrorsList.css'
import { Tooltip, Whisper, ButtonToolbar,Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
export default class MirrorsList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            initReqCount: 0,   // 清除搜索框标志
            filesInfo: []   //文件列表
        }
    }

    componentDidMount() {
        if (this.state.initReqCount === 0 ) {
            axios.get("/api/mirrors/").then(resp => {
                // console.log(resp)

                this.setState({
                    initReqCount: 1,
                    filesInfo: resp.data.filesInfo
                })
            }).catch(err =>{
                console.log(err)
            })
        }
    }

    openDir(url, e) {
        // 向兄弟组件发送消息，清空搜索框
        this.props.msgList(true)

        axios.get(url).then(resp => {
            console.log('new data : ',resp.data)

            this.setState({
                filesInfo: resp.data.filesInfo
            })
        }).catch(err =>{
            console.log(err)
        })
    }

    render() {
        // console.log('brother get:' + this.props.search)

        let sv = this.props.search
        // console.log('sv is:' + sv)
        let newList = []
        if (sv !== '') {
            this.state.filesInfo.map(o => {
                if (o.name.indexOf(sv) != -1) {
                    newList.push(o)
                }
            })
            return (
                <div className="mirrorsList">
                    <table>
                        {
                            newList.map((item) => {
                                return (
                                    <tr className="tr" onClick={this.openDir.bind(this, item.url)}>
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
                                        <td className={item.date === '...' ? "td-date-none" : "td-date"}>{item.date}</td>
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
                                    <tr className="tr" onClick={this.openDir.bind(this, item.url)}>
                                        <td className="td-name">
                                            <Whisper placement="right" trigger="hover" speaker={
                                                <Tooltip>
                                                    <i>{item.name === '...' ? 'Return to the last level' : item.name}</i>
                                                </Tooltip>
                                            }>
                                                <a
                                                    // href={this.state.url}
                                                    // title={item.name}

                                                >
                                                    {item.name}</a>
                                            </Whisper>
                                        </td>
                                        <td className={item.date === '...' ? "td-date-none" : "td-date"}>{item.date}</td>
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
