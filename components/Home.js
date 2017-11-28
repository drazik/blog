import React from "react";
import Head from "react-helmet";
import parseDate from "date-fns/parse";
import compareDatesDesc from "date-fns/compare_desc";
import {
    createContainer,
    query,
} from "@phenomic/preset-react-app/lib/client";
import { Layout } from "./Layout";
import { Link } from "react-router";
import { PostsList } from "./PostsList";

export const Home = ({ isLoading, posts}) => {
    const p = posts && posts.node && posts.node.list && posts.node.list
            .map(post => ({
                ...post,
                date: parseDate(post.date),
            }))
            .sort((a, b) => compareDatesDesc(a, b));

    return (
        <Layout>
            <Head>
                <title>Jesmo Drazik Blog</title>
                <meta name="description" content="Lead-développeur front-end @ Wandi" />
            </Head>
            {isLoading && "Loading..."}
            {!isLoading && p && (
                <div>
                    <PostsList posts={p} />
                </div>
            )}
        </Layout>
    );
};

export const HomeContainer = createContainer(Home, () => ({
    posts: query({ path: "posts" }),
}));
