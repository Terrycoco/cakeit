import { useStaticQuery, graphql } from "gatsby"

export const useCTAAreaQuery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta1Image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, width: 720)
              }
            }
          }
          cta2Image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 720, placeholder: TRACED_SVG)
              }
            }
          }
          cta3Image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 720, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `)

  return data
}
