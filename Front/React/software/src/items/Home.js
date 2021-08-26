import Header from "../Layout/Header";
import Foot from "../Layout/Foot";
import React, {Component} from "react";

export default class Home extends Component {

    render() {
        console.log(this.props.isActive)
        return (

            <div>
                <div className="Head">
                    <Header isActive={this.props.isActive}/>
                </div>
                home
                <footer className="footer">
                    <Foot/>
                </footer>
            </div>
        )
    }
}
