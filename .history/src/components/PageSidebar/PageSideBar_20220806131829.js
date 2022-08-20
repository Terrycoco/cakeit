import React from "react"
import { Link } from "gatsby"
import SidebarMessage from "../SidebarMessage/SidebarMessage"
import { Wrapper, Menu } from "./PageSidebar.styles"
import PageIcon from "../../images/page-icon.svg"

const PageSidebar = ({
  hasParent,
  hasChildren,
  children,
  parentChildren,
  currentPage,
  parentTitle,
}) => {
  console.log("children:", children)

  return (
    <Wrapper>
      {isNested ? (
        <Menu>
          <li className="sidebar-menu-header">
            <img src={PageIcon} alt="menu" />
            <span>Our Cakes</span>
          </li>
        </Menu>
      ) : (
        <SidebarMessage />
      )}
    </Wrapper>
  )
}

export default PageSidebar
