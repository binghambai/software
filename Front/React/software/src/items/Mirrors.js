import Header from "../Layout/Header";
import Middle from "../Layout/Middle";
import Foot from "../Layout/Foot";
import React, {Component} from "react";

export default class Mirrors extends Component{
    render() {
        return (
            <div>
                <div className="Head">
                    <Header isActive={this.props.isActive}/>
                </div>
                <div className="Middle">
                    <Middle/>
                </div>
                <footer className="footer">
                    <Foot/>
                </footer>
            </div>
        )
    }
}
