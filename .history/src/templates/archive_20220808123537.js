import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import ArchiveSidebar from "../components/ArchiveSidebar/ArchiveSidebar"
import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from "./archive.styles"

const archiveTemplate = ({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) => {
  return (
    <Layout>
      <StaticImage
        src="../images/archive_headerimage.png"
        placeholder="TRACED_SVG"
        width={1920}
        height={300}
        alt="ArchiveHero"
      />
      <Wrapper>
        <BreadCrumb
          parent={{
            uri: "/blog/all-posts",
            title: "Blog",
          }}
        />
        <ContentWrapper>
          <ArchiveSidebar catId={catId} categories={categories.edges} />
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default archiveTemplate

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`
