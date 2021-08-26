import React,{Component} from "react";
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'

import './App.css';
import './css/header.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Interceptor from "./Interceptor/Interceptor";

export default class App extends Component{

    render() {
        return (
            <BrowserRouter>
                <div className="App">

                    <Switch>
                        <Route path='/:path' component={Interceptor}/>

                        <Route path="/">
                            <Redirect to="/mirrors" />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}
