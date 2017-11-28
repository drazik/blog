import React from "react";
import { Router, Route, browserHistory } from "react-router";
import {
    createApp,
    renderApp,
} from "@phenomic/preset-react-app/lib/client";
import "./css/main.css";
import { HomeContainer } from "./components/Home";
import { PostContainer } from "./components/Post";

const routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={HomeContainer} />
        <Route path="/article/*" component={PostContainer} />
    </Router>
);

export default createApp(routes);

if (module.hot) {
    module.hot.accept(() => renderApp(routes));
}
