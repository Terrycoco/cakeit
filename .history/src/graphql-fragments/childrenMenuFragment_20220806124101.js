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
export const ParentMenuFragment = graphql`
  fragment ParentMenuFragment on WpHierarchicalContentNodeToParentContentNodeConnectionEdge {
    node {
      ... on WpPage {
        id
        title
        uri
        wpChildren {
          ...ChildrenMenuFragment
        }
      }
    }
  }
`
