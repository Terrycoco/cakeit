import { useStaticQuery, graphql } from "gatsby"

const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query heroQuery {
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

export default useHeroQuery
