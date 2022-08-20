const path = NodeRequire("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            count
            id
            name
            slug
            uri
          }
        }
      }
    }
  `)

  console.log(result)
}
