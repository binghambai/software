import React, {Component} from 'react'
import Pic from '../img/50.png'
import '../css/header.css'

export default class Header extends Component{

    render() {
        console.log(this.props)
        return (
            <div className="head-container">
                <img className="logo-img" src={Pic} />
                <h3 className="h3-logo">
                    我的软件站
                </h3>
                <nav className="mirrors-nav">
                    <a className={this.props.isActive===0?"mirrors-nav-item active":"mirrors-nav-item"} href="/home">HOME</a>
                    <a className={this.props.isActive===1?"mirrors-nav-item active":"mirrors-nav-item"} href="/blog">BLOG</a>
                    <a className={this.props.isActive===2?"mirrors-nav-item active":"mirrors-nav-item"} href="/feed">FEED</a>
                    <a className={this.props.isActive===3?"mirrors-nav-item active":"mirrors-nav-item"} href="/mirrors">MIRRORS</a>
                </nav>
            </div>
        )
    }
}
