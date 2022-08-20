import * as React from "react"
import Layout from "../components/Layout/Layout"

import Seo from "../components/SEO/SEO"
//import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not Found" />
    <p>Page Not Found</p>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default NotFoundPage
