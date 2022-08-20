import { useStaticQuery, graphql } from "gatsby"

export const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query LatestPost {
      posts: allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            excerpt
            uri
          }
        }
      }
    }
  `)

  return data.posts.edges[0].node
}
