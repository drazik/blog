import React from "react";
import Head from "react-helmet";
import parseDate from "date-fns/parse";
import compareDatesDesc from "date-fns/compare_desc";
import {
    createContainer,
    query,
} from "@phenomic/preset-react-app/lib/client";
import Layout from "./Layout";
import { Link } from "react-router";

const Home = ({ isLoading, posts}) => (
    <Layout>
        <Head>
            <title>Jesmo Drazik Blog</title>
            <meta name="description" content="Lead-développeur front-end @ Wandi" />
        </Head>
        {isLoading && "Loading..."}
        {!isLoading && (
            <div>
                <ul>
                    {posts &&
                        posts.node &&
                        posts.node.list &&
                            posts.node.list
                                .map(post => ({
                                    ...post,
                                    date: parseDate(post.date),
                                }))
                                .sort((a, b) => compareDatesDesc(a, b))
                                .map(post => (
                                    <li key={post.id}>
                                        {post.externalURL && <a href={post.externalURL} target="_blank">{post.title || post.id}</a>}
                                        {!post.externalURL && <Link to={`/article/${post.id}/`}>{post.title || post.id}</Link>}
                                    </li>
                                ))
                    }
                </ul>
                {posts && posts.node && posts.node.hasNextPage && <Link to="/articles" style={{display: "block", textAlign: "center"}}>Voir tous les articles</Link>}
            </div>
        )}
    </Layout>
);

const HomeContainer = createContainer(Home, () => ({
    posts: query({ path: "posts", limit: 10 }),
}));

export default Home;
export {
    Home,
    HomeContainer,
};
