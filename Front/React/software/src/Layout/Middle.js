import React, {Component} from 'react'

import News from "../items/news/news";

import MirrorsLists from "../items/mirrors/MirrorsLists"
import '../css/middle.css'

export default class Middle extends Component{

    constructor(props) {
        super(props);
        this.state = {
            searchVal: '',
            needClean: false
        }
    }

    message(msg){
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
                        <MirrorsLists/>
                    </div>
                    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
                        <News/>
                    </div>
                </div>
            </div>
        );
    }

}
