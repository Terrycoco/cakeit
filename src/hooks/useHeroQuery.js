import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 47 }) {
        id
        ACF_HomePage {
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
              }
            }
          }
          heroText
        }
      }
    }
  `)
  return data
}
