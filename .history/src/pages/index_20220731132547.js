import * as React from "react"

import Seo from "../components/SEO/SEO"
//import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <p>Start here</p>
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
