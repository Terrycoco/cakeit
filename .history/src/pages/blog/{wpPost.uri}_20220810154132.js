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

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    img {
      margin: 0 1rem;
    }
  }
`

const PostPageTemplate = ({ data }) => {
  const post = data.wpPost
  const date = post.date
  const author = post.author.node.name
  const categories = post.categories ? post.categories.nodes : null
  console.log("currentPostContent: ", post.content)

  return (
    <Layout>
      <Wrapper>
        <BreadCrumb parent={{ uri: "/blog/all-posts", title: "Blog" }} />
        <ContentWrapper>
          <PostSidebar date={date} author={author} categories={categories} />
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
      categories {
        nodes {
          id
          name
          slug
          uri
        }
      }
    }
  }
`
