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
  console.log("children:", children)

  return (
    <Wrapper>
      {isNested ? (
        <Menu>
          <div className="sidebar-menu-header">
            <img src={PageIcon} alt="menu" />
            <li>Our Cakes</li>
          </div>
        </Menu>
      ) : (
        <SidebarMessage />
      )}
    </Wrapper>
  )
}

export default PageSidebar
