import React from "react"
import { Link } from "gatsby"
import SidebarMessage from "../SidebarMessage/SidebarMessage"
import { Wrapper, Menu } from "./PageSidebar.styles"
import PageIcon from "../../images/page-icon.svg"

const PageSidebar = ({
  isNested = false,
  children,
  parentChildren,
  currentPage,
  parentTitle,
}) => {
  return (
    <Wrapper>
      {!isNested (
        <SidebarMessage />
      ) : (
        <p>menu here</p>
      )}
    </Wrapper>
  )
}

export default PageSidebar
