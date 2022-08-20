import React from "react"
import { Link } from "gatsby"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ items }) => {
  const renderLink = item => {
    if (item.parentId > 0) {
      return (
        <li id={item.id} key={item.id}>
          <Link to={item.url} key={`key${item.id}`}>
            {item.label}
          </Link>
          {renderChildMenu(item)}
        </li>
      )
    }
  }

  const renderChildMenu = item => {
    if (item.childItems && item.childItems.nodes.length) {
      return (
        <ul id={`parent${item.id}`} key={`parent${item.id}`}>
          {item.childItems.nodes.map(child => {
            return (
              <li id={child.id} key={`ch${child.id}`}>
                <Link to={child.url} key={child.id}>
                  {child.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )
    } else {
      console.log("got here")
      return null
    }
  }
  return (
    <NavigationWrapper>
      <ul id="navmenu">
        {items.map(item => {
          return renderLink(item)
        })}
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
