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
