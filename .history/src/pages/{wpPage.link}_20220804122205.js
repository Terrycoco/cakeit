import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"

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

const PageTemplate = ({ data }) => (
    console.log(data)
  <Layout>
    <p>PageHero</p>
    <Wrapper>
      <ContentWrapper>Content</ContentWrapper>
      <p>Sidebar</p>
    </Wrapper>
  </Layout>
)

export default PageTemplate

export const PageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 1920)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
            wpParent {
              node {
                ... on WpPage {
                  id
                  title
                  uri
                }
                uri
              }
            }
          }
        }
      }
    }
  }
`
