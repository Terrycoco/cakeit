const { resolutions } = require("gatsby-plugin-sharp")

const path = require("path")

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
    reporter.panicOnBuild(`Something went horribly wrong!`, result.errors)
    return
  }
  const { wp, allWpCategory } = result.data
  console.log(result)
}
