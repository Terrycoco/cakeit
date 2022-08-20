import { graphql } from "gatsby"

export const FeaturedImageFragment = graphql`
  fragment FeaturedImageFragment on WpNodeWithFeaturedImageToMediaItemConnectionEdge {
    node {
      id
      publicUrl
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 1920)
        }
      }
    }
  }
`
