import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
//image
import logo from "../images/gatsby-icon.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />

    <div className="wrapper"></div>
    <div className="space"></div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
