import React from "react"
import { Link } from "gatsby"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ items }) => {
  const renderParent = item => {
    if (!item.parentId) {
      const hasChildren = item.childItems.nodes.length > 0

      return (
        <li id={item.id} key={item.id}>
          <Link
            to={item.url}
            key={`key${item.id}`}
            activeClassName="nav-active"
          >
            {item.label}
            {hasChildren && <div>&#8964;</div>}
          </Link>
          {hasChildren ? renderChild(item) : null}
        </li>
      )
    }
  }

  const renderChild = item => {
    return (
      <ul id={`parent${item.id}`} key={`parent${item.id}`}>
        {item.childItems.nodes.map(child => {
          return (
            <li id={child.id} key={`ch${child.id}`}>
              <Link to={child.url} key={child.id} activeClassName="nav-active">
                {child.label}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <NavigationWrapper>
      <ul id="navmenu">
        {items.map(item => {
          return renderParent(item)
        })}
        <li id="contact" key="contact">
          <Link to="/contact" key="key-contact" activeClassName="nav-active">
            Contact
          </Link>
        </li>
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
