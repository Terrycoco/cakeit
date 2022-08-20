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
        <img src={PageIcon} alt="archiveMenu" />
        <div></div>
      </Menu>
    </Wrapper>
  )
}

export default ArchiveSidebar
