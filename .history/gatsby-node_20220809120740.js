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
    reporter.panicOnBuild(
      `Something went horribly wrong during build -- gatsby-node`,
      result.errors
    )
    return
  }
  const { wp, allWpCategory } = result.data
  console.log(wp)

  //create pages for each categorty
  allWpCategory.edges.forEach(category => {
    const postsPerPage = wp.readingSettings.postsPerPage
    const numberOfPosts = category.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    //we don't want to create pages for empty categories or the category "uncategorized"
    if (numberOfPosts > 0 || category.node.name !== "uncategorized") {
      //for each legit category loop thru pages
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? category.node.uri : `${category.node.uri}${i + 1}`,
          component: archiveTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPageNum: i + 1,
            catId: category.node.id,
            catName: category.node.name,
            catUri: category.node.uri,
            categories: allWpCategory,
          },
        })
      }) //end page loop
    }
  }) //end category loop
}
