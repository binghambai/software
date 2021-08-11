import React,{Component} from "react";
import MyIndex from "../myIndex/MyIndex";
import {Redirect} from "react-router-dom";
import NotFound from "../NotFound/NotFound";

export default class MyInterceptor extends Component {

    render() {
        console.log('in')
        console.log(this.props.location.pathname)
        let path = this.props.location.pathname
        if(path === '/mirrors'){
            return (
                <div>
                    <MyIndex/>
                </div>
            )
        }else if(path.startsWith('/mirrors') && path.length > 8){
            return (
                    <Redirect to="/mirrors" />
                )
        }else {
            return (
                <div>
                    <NotFound/>
                </div>
            )

        }
    }

}
