import { useStaticQuery, graphql } from "gatsby"

export const useContactQuery = () => {
  const data = useStaticQuery(graphql`
    query contactQuery {
      wpPage(databaseId: { eq: 240 }) {
        content
        databaseId
      }
    }
  `)
  return data.wpPage
}
