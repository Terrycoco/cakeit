import React from "gatsby"
import { Link } from "gatsby"
import PageIcon from "../../images/page-icon.svg"
import { Wrapper, Menu } from "./ArchiveSidebar.styles"

const ArchiveSidebar = ({ catId, categories }) => {
  console.log("cats: ", categories)
  console.log("catID:", catId)
  return <Wrapper>sidebar</Wrapper>
}

export default ArchiveSidebar
