import React,{Component} from "react";
import {Redirect, Route} from "react-router-dom";

import Mirrors from "../items/Mirrors";
import Home from "../items/Home";
import Blog from "../items/Blog";
import Feed from "../items/Feed";

export default class Interceptor extends Component {

    render() {
        let path = this.props.location.pathname
        console.log(path)
        switch (path) {
            case '/mirrors':
                return (
                    <div>
                        <Mirrors isActive = {3}/>
                    </div>
                )
            case '/home':
                return (
                    <div>
                        <Home isActive = {0}/>
                    </div>
                )
            case '/blog':
                return (
                    <div>
                        <Blog isActive = {1}/>
                    </div>
                )
            case '/feed':
                return (
                    <div>
                        <Feed isActive = {2}/>
                    </div>
                )
            default:
                return (
                    <div>
                        <Redirect to="/mirrors" />
                    </div>
                )
        }
    }

}
