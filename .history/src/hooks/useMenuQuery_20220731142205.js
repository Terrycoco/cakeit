import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            parentId
            url
            id
            childItems {
              nodes {
                id
                label
                parentId
                url
              }
            }
          }
        }
      }
    }
  `)
  return data
}
