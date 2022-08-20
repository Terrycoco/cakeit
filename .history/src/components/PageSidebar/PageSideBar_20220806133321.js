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

  console.log("top: ", top)
  console.log("childs:", childs)

  return (
    <Wrapper>
      {hasParent || hasChildren ? (
        <Menu>
          <Link to={top.uri}>
            <li key={top.id} className="sidebar-menu-header">
              <img src={PageIcon} alt="menu" />
              <span dangerouslySetInnerHTML={{ __html: top.title }} />
            </li>
          </Link>
          {childs.map(child => {
            return <li key={child.id}>{child.title}</li>
          })}
        </Menu>
      ) : (
        <SidebarMessage />
      )}
    </Wrapper>
  )
}

export default PageSidebar
