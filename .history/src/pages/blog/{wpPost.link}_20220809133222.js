import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout/Layout"

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
  return <Layout></Layout>
}

export default PostPageTemplate

export const PageQuery = graphql(``)
