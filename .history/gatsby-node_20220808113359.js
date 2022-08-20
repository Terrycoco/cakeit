const { resolutions } = require("gatsby-plugin-sharp")

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

  //report on errors
  if (result.errors) {
    reporter.panicOnBuild()
  }

  console.log(result)
}
