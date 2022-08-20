import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import ArchiveSidebar from "../components/ArchiveSidebar/ArchiveSidebar"
import Pagination from "../components/Pagination/Pagination"
import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from "./archive.styles"

//gatsby will run this to create pages on server
//gatsby runs node query first
//then runs below query for each page plugging in context variables
//then runs this function to create page
//data is from below query
//pageContext is from original node query
const archiveTemplate = ({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPageNum },
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
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: catName }} />
            {allWpPost.edges.map(post => {
              return (
                <article key={post.node.id} className="entry-content">
                  <Link to={`${post.node.uri}`}>
                    <StyledH2
                      dangerouslySetInnerHTML={{ __html: post.node.title }}
                    />
                  </Link>
                  <StyledDate
                    dangerouslySetInnerHTML={{ __html: post.node.date }}
                  />
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                  <StyledReadMore to={`/blog${post.node.uri}`}>
                    Read More
                  </StyledReadMore>
                  <hr />
                </article>
              )
            })}
            <Pagination
              catUri={catUri}
              page={currentPageNum}
              totalPages={numPages}
              catName={catName}
            />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default archiveTemplate

//gatsby runs this query dynamically for each page -- putting in variables from gatsby-node context
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
