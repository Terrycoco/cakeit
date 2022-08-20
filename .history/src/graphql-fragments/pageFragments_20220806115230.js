import { graphql } from "gatsby"

export const CurrentPageFragment = graphql`
  fragment CurrentPageFragment on WpPage {
    id
    title
    content
    status
    featuredImage {
      node {
        id
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, width: 1920)
          }
        }
      }
    }
  }
`
export const FeaturedImageFragment = graphql`
  fragment FeaturedImageFragment on featuredImage {
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
