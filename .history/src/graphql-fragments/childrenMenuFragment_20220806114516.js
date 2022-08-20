import { graphql } from "gatsby"

export const ChildrenMenuFragment = graphql`
  fragment ChildrenMenuFragment on WpChildren {
    nodes {
      ... on WpPage {
        id
        uri
        title
      }
    }
  }
`
