import { graphql } from "gatsby"

export const ChildrenMenuFragment = graphql`
  fragment ChildrenMenuFragment on WpHierarchicalContentNodeToContentNodeChildrenConnection {
    nodes {
      ... on WpPage {
        id
        uri
        title
      }
    }
  }
`
