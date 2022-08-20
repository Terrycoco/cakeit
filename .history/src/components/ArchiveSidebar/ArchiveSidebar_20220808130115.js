import React from "react"
import { Link } from "gatsby"
import PageIcon from "../../images/page-icon.svg"
import { Wrapper, Menu } from "./ArchiveSidebar.styles"

const ArchiveSidebar = ({ catId, categories }) => {
  console.log("cats: ", categories)
  console.log("catID:", catId)

  const sortedCats = [...categories].sort((x, y) => {
    if (x.node.slug === "all-posts") return -1
    if (y.node.slug === "all-posts") return 1
    return 0
  })

  return (
    <Wrapper>
      <Menu>
        <li classname="sidebar-menu-header">
          <img src={PageIcon} alt="archiveMenu" />
          <span>Posts</span>
        </li>
        {sortedCategories.map(cat => {
          if (cat.node.count !== 0) {
            return cat.node.slug !== "uncategorized" ? (
              <li key={cat.node.id}>
                <span className="count">{cat.node.count}</span>
                <Link to={cat.node.uri} activeClassName="sidebar-highlighted">
                  {cat.node.name}
                </Link>
              </li>
            ) : null
          }
        })}
      </Menu>
    </Wrapper>
  )
}

export default ArchiveSidebar
