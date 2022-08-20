import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PageHero from "../components/PageHero/PageHero"
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PageSidebar from "../components/PageSidebar/PageSidebar"

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

const PageTemplate = ({ data }) => {
  console.log(data)
  const img = data.wpPage.featuredImage.node.localFile

  return (
    <Layout>
      {data.wpPage.featuredImage ? (
        <PageHero
          img={
            data.wpPage.featuredImage.node.localFile.childImageSharp
              .gatsbyImageData
          }
        />
      ) : null}
      <Wrapper>
        <BreadCrumb
          parent={data.wpPage.wpParent ? data.wpPage.wpParent.node : null}
        />
        <ContentWrapper>Content</ContentWrapper>
        <p>Sidebar</p>
      </Wrapper>
    </Layout>
  )
}

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
      wpParent {
        node {
          ... on WpPage {
            id
            title
            uri
          }
        }
      }
    }
  }
`
