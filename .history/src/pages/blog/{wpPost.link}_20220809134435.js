import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout/Layout"
import { FeaturedImageFragment } from "../graphql-fragments/featuredImageFragment"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20pox;
`

const ContentWrapper = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin: 20px 0 0 0;
`

const PostPageTemplate = props => {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <PageContent>page</PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default PostPageTemplate

export const PageQuery = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
      date(formatString: "DD MMM YYYY")
      author {
        node {
          name
        }
      }
    }
  }
`
