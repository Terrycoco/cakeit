import React from "react"
import { Link } from "gatsby"
import SidebarMessage from "../SidebarMessage/SidebarMessage"
import { Wrapper, Menu } from "./PageSidebar.styles"
import PageIcon from "../../images/page-icon.svg"

const PageSidebar = ({
  children,
  parentChildren,
  currentPage,
  parentTitle,
}) => {
  return (
    <Wrapper>
      {!parentTitle && children.length == 0 ? (
        <SidebarMessage />
      ) : (
        <p>menu here</p>
      )}
    </Wrapper>
  )
}

export default PageSidebar
