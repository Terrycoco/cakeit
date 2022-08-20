import * as React from "react"
import Layout from "../components/Layout/Layout"

import Seo from "../components/SEO/SEO"
//import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>Start here!</p>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
