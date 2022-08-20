import { graphql } from "gatsby"

export const FeaturedImageFragment = graphql`
  fragment FeaturedImageFragment on WpNodeWithFeaturedImageToMediaItemConnectionEdge {
    node {
      id
      localFile {
        publicURL
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 1920)
        }
      }
    }
  }
`
