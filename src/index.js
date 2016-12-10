import React from "react";
import ReactDOM from "react-dom";
import {Router, IndexRoute, Route, hashHistory} from "react-router";
import App from "./components/App";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="login" component={Login}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
