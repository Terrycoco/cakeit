import { graphql } from "gatsby"
import { FeaturedImageFragment } from "./featuredImageFragment"

export const CurrentPageFragment = graphql`
  fragment CurrentPageFragment on WpPage {
    id
    title
    content
    status
    parentId
    featuredImage {
      ...FeaturedImageFragment
    }
  }
`
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
