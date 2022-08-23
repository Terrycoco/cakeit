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
  ParentMenuFragment,
} from "../graphql-fragments/pageFragments"

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

const PageContent = styled.article`
  margin: 20px 0 0 0;
`

const PageTemplate = ({ data }) => {
  // console.log("data imported:", data)
  const currentPage = data.wpPage
  const hasChildren =
    currentPage.wpChildren.nodes && currentPage.wpChildren.nodes.length > 0
  const img =
    currentPage.featuredImage && currentPage.featuredImage.node.localFile
  const hasParent = currentPage.parentId
  const parentChildren = hasParent && currentPage.wpParent.node.wpChildren.nodes
  const parent = hasParent && currentPage.wpParent.node

  return (
    <Layout>
      <Wrapper>
        <BreadCrumb parent={parent} />
        <ContentWrapper>
          <PageSidebar
            hasParent={hasParent}
            hasChildren={hasChildren}
            parentChildren={parentChildren}
            currentPage={currentPage}
            parent={parent}
          >
            {hasChildren && currentPage.wpChildren.nodes}
          </PageSidebar>
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
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
        ...ChildrenMenuFragment
      }
      wpParent {
        ...ParentMenuFragment
      }
    }
  }
`
