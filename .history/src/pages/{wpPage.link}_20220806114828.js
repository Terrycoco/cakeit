import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PageHero from "../components/PageHero/PageHero"
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PageSidebar from "../components/PageSidebar/PageSidebar"
import {
  CurrentPageFragment,
  ChildrenMenuFragment,
} from "../graphql-fragments/pageFragments"

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
  console.log("data imported:", data)
  // const currentPage = data.wpPage
  // const img =
  //   data.wpPage.featuredImage && data.wpPage.featuredImage.node.localFile
  // const parentChildren =
  //   data.wpPage.wpParent && data.wpPage.wpParent.node.wpChildren.nodes
  // const parentTitle = data.wpPage.wpParent && data.wpPage.wpParent.node.title

  // console.log("parentChildren:", parentChildren)

  return (
    <Layout>
      {/* <ContentWrapper>
          <PageSidebar
            parentChildren={parentChildren}
            currentPage={currentPage}
            parentTitle={parentTitle}
          >
            {data.wpPage.wpChildren}
          </PageSidebar>
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
          </PageContent>
        </ContentWrapper>
        <PageSidebar /> */}
      {/* </Wrapper> */}
    </Layout>
  )
}

export default PageTemplate

//Compiler will run and replace every query it finds with json data
export const PageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      ...CurrentPageFragment
      wpChildren {
        nodes {
          id
        }
      }
    }
  }
`
