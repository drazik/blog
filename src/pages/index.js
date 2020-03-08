import React from "react"
import Head from "react-helmet"
import { Layout } from "../components/Layout"

function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Jesmo Drazik Blog</title>
        <meta name="description" content="Lead-développeur front-end @ Wandi" />
      </Head>
      Hey ho, hello
    </Layout>
  )
}

export default IndexPage
