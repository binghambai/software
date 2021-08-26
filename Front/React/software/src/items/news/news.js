import React, {Component} from 'react'
import "../../css/news.css"

export default class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            github1: 'https://github.com/binghambai/renotes',
            github2: 'https://github.com/xuyichaoxyc/renotes',
            news1: 'http://www.test1.com',
            news2: 'http://www.test2.com',
            news3: 'http://www.test3.com',
            news4: 'http://www.test4.com',
        }
    }

    render() {
        return (
            <div >

                <h3>
                    <span id="span-news" className="glyphicon glyphicon-tag"></span>
                    相关信息</h3>
                <div id="panel" className="panel panel-default">
                    <div className="panel-body">
                        <h5 className="h5-icons-github">
                            <span>
                                <img src="https://img.icons8.com/material-sharp/24/000000/github.png"/>
                            </span>
                            Github</h5>
                        <ur>

                            <li><a href={this.state.github1}>{this.state.github1}</a></li>
                            <li><a href={this.state.github2}>{this.state.github1}</a></li>
                        </ur>
                        <br/>
                        <h5 className="h5-icons-mirrors">
                            <span>
                                <img src="https://img.icons8.com/material-rounded/24/000000/news.png"/>
                            </span>
                            News
                        </h5>
                        <ur>
                            <li><a href={this.state.news1}>{this.state.news1}</a></li>
                            <li><a href={this.state.news2}>{this.state.news2}</a></li>
                            <li><a href={this.state.news3}>{this.state.news3}</a></li>
                            <li><a href={this.state.news4}>{this.state.news4}</a></li>
                        </ur>
                    </div>
                </div>
            </div>
        )
    }
}
