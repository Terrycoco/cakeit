import { graphql } from "gatsby"

export const currentPage = graphql`
  fragment CurrentPage on WpPage {
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
