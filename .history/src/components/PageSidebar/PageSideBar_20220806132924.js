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
  parent,
}) => {
  console.log("children:", children)
  //if this is a parent it is top, return children
  //else if this is a child return parent's children
  var top, childs
  if (hasChildren) {
    top = currentPage
    childs = children
  } else if (hasParent) {
    top = parent
    childs = parentChildren
  }

  return (
    <Wrapper>
      {hasParent || hasChildren ? (
        <Menu>
          <li className="sidebar-menu-header">
            <img src={PageIcon} alt="menu" />
            <span dangerouslySetInnerHTML={{ __html: top.title }} />
          </li>
        </Menu>
      ) : (
        <SidebarMessage />
      )}
    </Wrapper>
  )
}

export default PageSidebar
