import React from "react";
import Head from "react-helmet";
import { Layout } from "./Layout";
import {
  withPhenomicApi,
  query,
  BodyRenderer,
  textRenderer
} from "@phenomic/preset-react-app/lib/client";
import { Link } from "react-router";
import { MaybeOutdatedMessage } from "./MaybeOutdatedMessage";
import differenceInYears from "date-fns/difference_in_years";
import parseDate from "date-fns/parse";
import { ErrorPage } from "./ErrorPage";
import { Loading } from "./Loading";
import pkg from "../package.json";

function getGithubRootURL() {
  return pkg.repository.url.replace(/\.git$/, "");
}

function getGithubEditURL(filename) {
  const githubRootURL = getGithubRootURL();

  return githubRootURL + "/edit/master/content/posts/" + filename;
}

export const Post = ({ hasError, isLoading, page, ...props }) => {
  if (hasError) {
    return <ErrorPage error={page.error} />;
  }

  return (
    <Layout>
      {isLoading && <Loading />}
      {!isLoading &&
        page.node && (
          <div>
            <article className="article">
              <Head>
                <title>{page.node.title} - Jesmo Drazik Blog</title>
                <meta
                  name="description"
                  content={textRenderer(page.node.body).slice(0, 150) + "…"}
                />
                <body className="article-detail" />
              </Head>
              <h1 style={{ textAlign: "center" }}>{page.node.title}</h1>
              {page.node.timeSensitive &&
                page.node.date &&
                differenceInYears(new Date(), parseDate(page.node.date)) >
                  1 && <MaybeOutdatedMessage />}
              <BodyRenderer>{page.node.body}</BodyRenderer>
              <footer style={{ textAlign: "center" }}>
                <a
                  href={getGithubEditURL(
                    props.params.splat + "/" + page.node.filename
                  )}
                  target="_blank"
                >
                  Proposer des modifications
                </a>
              </footer>
            </article>
            <div>
              <Link to="/">Revenir à l'accueil</Link>
            </div>
          </div>
        )}
    </Layout>
  );
};

export const PostContainer = withPhenomicApi(Post, props => ({
  page: query({ path: "content/posts", id: props.params.splat })
}));
