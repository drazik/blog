import React from "react";
import { Link } from "react-router";

export const PostsList = ({ posts = [] }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        {post.externalURL && (
          <a href={post.externalURL} target="_blank">
            {post.title || post.id} 🔗
          </a>
        )}
        {!post.externalURL && (
          <Link to={`/article/${post.id}/`}>{post.title || post.id}</Link>
        )}
      </li>
    ))}
  </ul>
);
