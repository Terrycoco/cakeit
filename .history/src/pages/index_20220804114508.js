import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero"
import CTAArea from "../components/CTAArea/CTAArea"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Quote from "../components/Quote/Quote"
import StaticPost from "../components/StaticPost"
import { useHomeQuery } from "../../hooks/useHomeQuery"
//import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CTAArea />
    <LatestBlogPost />
    <Quote />
    <StaticPost dataHook={useHomeQuery} />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
