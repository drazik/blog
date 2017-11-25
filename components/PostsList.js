import React from "react";
import Head from "react-helmet";
import {
    createContainer,
    query,
} from "@phenomic/preset-react-app/lib/client";
import parseDate from "date-fns/parse";
import compareDatesDesc from "date-fns/compare_desc";
import Layout from "./Layout";
import { Link } from "react-router";

const PostsList = ({ isLoading, posts }) => (
    <Layout>
        {isLoading && "Loading..."}
        {!isLoading && (
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
                                <Link to={`/article/${post.id}/`}>{post.title || post.id}</Link>
                            </li>
                        ))}
            </ul>
        )}
    </Layout>
);

const PostsListContainer = createContainer(PostsList, () => ({
    posts: query({ path: "posts" }),
}));

export default PostsList;
export {
    PostsList,
    PostsListContainer,
};
