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
        </Route>
        <Route path="/login" component={Login}/>
    </Router>,
    document.getElementById('root')
);
