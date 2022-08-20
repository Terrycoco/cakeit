import React from "react"
import { Link } from "gatsby"
import PageIcon from "../../images/page-icon.svg"
import { Wrapper, Menu } from "./ArchiveSidebar.styles"

const ArchiveSidebar = ({ catId, categories }) => {
  console.log("cats: ", categories)
  console.log("catID:", catId)
  return (
    <Wrapper>
      <Menu>
        <img src={PageIcon} alt="archiveMenu" />
      </Menu>
    </Wrapper>
  )
}

export default ArchiveSidebar
