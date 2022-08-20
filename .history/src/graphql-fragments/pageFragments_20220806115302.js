import { graphql } from "gatsby"

export const CurrentPageFragment = graphql`
  fragment CurrentPageFragment on WpPage {
    id
    title
    content
    status
    featuredImage {
      ...FeaturedImageFragment
    }
  }
`
export const FeaturedImageFragment = graphql`
  fragment FeaturedImageFragment on FeaturedImage {
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
