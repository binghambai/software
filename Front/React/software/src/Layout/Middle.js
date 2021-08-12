import React, {Component} from 'react'
import '../css/middle.css'
import MirrorsList from "../mirrors/mirrorsList";
import MirrorsHeader from "../mirrors/mirrorsHeader";
import TestMirrorsList from "../mirrors/testMirrorsList"
import News from "../News/news";
export default class Middle extends Component{

    constructor(props) {
        super(props);
        this.state = {
            searchVal: '',
            needClean: false
        }
    }

    message(msg){
        console.log('father get :'+ msg)
        this.setState({
            searchVal: msg
        })
    }

    mList(msgList) {
        this.setState({
            needClean: msgList
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row row-offcanvas row-offcanvas-right">
                    <div className="col-xs-12 col-sm-9">
                        {/*获取MirrorsHeader传出来的查询信息*/}
                        {/*<MirrorsHeader msg={this.message.bind(this)} needClean={this.state.needClean}/>*/}
                        {/*<MirrorsList search={this.state.searchVal} msgList={this.mList.bind(this)}/>*/}
                        <TestMirrorsList/>
                    </div>
                    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
                        <News/>
                    </div>
                </div>
            </div>
        );
    }

}
