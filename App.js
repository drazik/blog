import React from "react";
import { Router, Route, browserHistory, Link } from "react-router";
import {
    createApp,
    renderApp,
    createContainer,
    query,
    BodyRenderer,
    textRenderer,
} from "@phenomic/preset-react-app/lib/client";
import Head from "react-helmet";
import Layout from "./components/Layout";
import "./css/main.css";
import { HomeContainer } from "./components/Home";
import { PostsListContainer } from "./components/PostsList";
import { PostContainer } from "./components/Post";

const routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={HomeContainer} />
        <Route path="/articles" component={PostsListContainer} />
        <Route path="/article/*" component={PostContainer} />
    </Router>
);

export default createApp(routes);

if (module.hot) {
    module.hot.accept(() => renderApp(routes));
}
