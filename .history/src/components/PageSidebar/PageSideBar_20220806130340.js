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
      {isNested ? (
        <Menu>
          <img src={PageIcon} alt="menu" />
          {children.forEach(child => {
          return <li>{child.title}</li>
        }}
        </Menu>
      ) : (
        <SidebarMessage />
      )}
    </Wrapper>
  )
}

export default PageSidebar
