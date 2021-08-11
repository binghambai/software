import React, {Component} from 'react'
import Pic from '../img/50.png'
import '../css/header.css'
// header导航栏

export default class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isActive: 3,
        }
    }

    aEvent = (e) => {
        switch (e.target.outerText) {
            case 'HOME':
                this.setState({isActive:0})
                break
            case 'BLOG':
                this.setState({isActive:1})
                break
            case 'FEED':
                this.setState({isActive:2})
                break
            case 'MIRRORS':
                this.setState({isActive:3})
                break
            default:
                break
        }
    }

    render() {
        return (
            <div className="head-container">
                <img className="logo-img" src={Pic} />
                <h3 className="h3-logo">


                    我的软件站
                </h3>

                <nav className="mirrors-nav">
                    <a className={this.state.isActive===0?"mirrors-nav-item active":"mirrors-nav-item"} href="#" onClick={this.aEvent}>HOME</a>
                    <a className={this.state.isActive===1?"mirrors-nav-item active":"mirrors-nav-item"} href="#" onClick={this.aEvent}>BLOG</a>
                    <a className={this.state.isActive===2?"mirrors-nav-item active":"mirrors-nav-item"} href="#" onClick={this.aEvent}>FEED</a>
                    <a className={this.state.isActive===3?"mirrors-nav-item active":"mirrors-nav-item"} href="#" onClick={this.aEvent}>MIRRORS</a>
                </nav>
            </div>
        )
    }
}
