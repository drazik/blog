import React from "react";
import { Layout } from "./Layout";
import Head from "react-helmet";
import { Link } from "react-router";

export const ErrorPage = ({ error }) => {
    const status = (error && error.status) || 404;
    const message = error && status !== 404 ? error.statusText : "Page introuvable";

    return (
        <Layout>
            <Head>
                <title>{message} - Jesmo Drazik Blog</title>
            </Head>
            <h2 style={{textAlign: "center"}}>{message}</h2>
            <p>
                Vous pouvez <a href="https://github.com/drazik/blog/issues">ouvrir une issue sur GitHub</a> si vous vous attendiez à trouver quelque chose sur cette page. Dans le cas contraire, je vous propose de <Link to="/">revenir à l'accueil</Link>.
            </p>
        </Layout>
    );
};
