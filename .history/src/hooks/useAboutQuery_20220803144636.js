import { useStaticQuery, graphql } from "gatsby"

export const useHomeQuery = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      wpPage(databaseId: { eq: 47 }) {
        content
        title
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `)

  return data.wpPage
}
