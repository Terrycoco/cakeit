import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout/Layout"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import PostSidebar from "../../components/PostSidebar/PostSidebar"
import { FeaturedImageFragment } from "../../graphql-fragments/featuredImageFragment"
import { ParentMenuFragment } from "../../graphql-fragments/pageFragments"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: flex;
  }
`

const PostContent = styled.article`
  margin: 20px 0 0 0;
`

const PostPageTemplate = ({ data }) => {
  const post = data.wpPost
  const parent = console.log("currentPost: ", post)

  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <PostSidebar />
          <PostContent>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </PostContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default PostPageTemplate

export const PageQuery = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      uri
      title
      content
      date(formatString: "DD MMM YYYY")
      author {
        node {
          name
        }
      }
      featuredImage {
        ...FeaturedImageFragment
      }
      wpParent {
        ...ParentMenuFragment
      }
    }
  }
`
