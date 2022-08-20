const { resolutions } = require("gatsby-plugin-sharp")

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const archiveTemplate = path.resolve("./src/templates/archive.js")

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
  console.log(wp)

  //create pages for each categorty
  allWpCategory.edges.forEach(category => {
    const postsPerPage = wp.readingSetting.postsPerPage
    const numberOfPosts = category.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    //we don't want to create pages for empty categories or the category "uncategorized"
    if (numberOfPosts > 0 || category.node.name !== "uncategorized") {
    }
  })
}
