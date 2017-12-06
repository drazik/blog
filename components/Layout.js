import React from "react";
import Head from "react-helmet";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";

export const Layout = ({ children }) => (
    <div>
        <Head>
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width" />
            <title>Jesmo Drazik Blog</title>
        </Head>
        <Header />
        <Content>
            {children}
        </Content>
        <Footer />
    </div>
);
