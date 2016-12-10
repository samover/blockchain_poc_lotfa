import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import App from "./components/App";
import Dashboard from "./components/Dashboard";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="dashboard" component={Dashboard}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
