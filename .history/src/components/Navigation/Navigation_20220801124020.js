import React from "react"
import { Link } from "gatsby"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ items }) => {
  const renderLink = item => {
    console.log("item is:", item.label)
    return (
      <li id={item.id} key={item.id}>
        <Link to={item.url} key={item.id}>
          {item.label}
        </Link>
        {renderChildMenu(item)}
      </li>
    )
  }

  const renderChildMenu = item => {
    if (item.childItems && item.childItems.nodes.length) {
      return (
        <ul id={`parent${item.id}`} key={`parent${item.id}`}>
          {item.childItems.nodes.map(child => {
            return renderLink(child)
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
