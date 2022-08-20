import { graphql } from "gatsby"

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
