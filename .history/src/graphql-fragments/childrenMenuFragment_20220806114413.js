import { graphql } from "gatsby"

export const ChildrenMenuFragment = graphql`
  fragment ChildrenMenuFragment on wpChildren {
    nodes {
      ... on WpPage {
        id
        uri
        title
      }
    }
  }
`
