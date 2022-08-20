import { useStaticQuery, graphql } from "gatsby"

export const useQuote = () => {
  const data = useStaticQuery(graphql`
    query quoteQuery {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          quote1Author
          quote1Text
        }
      }
    }
  `)

  return data.wpPage.ACF_HomePage
}
