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
export const FeaturedImageFragment = graphql`
  fragment FeaturedImageFragment on WpNodeWithFeaturedImageToMediaItemConnectionEdge {
    node {
      id
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 1920)
        }
      }
    }
  }
`
