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
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic|Anonymous+Pro:400,700,400italic,700italic|Merriweather:400,700,300" />
            <link rel="stylesheet" href="/css/main.css" />
        </Head>
        <Header />
        <Content>
            {children}
        </Content>
        <Footer />
    </div>
);
