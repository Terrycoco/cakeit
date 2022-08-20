import React from "react"
import { Link } from "gatsby"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ items }) => {
  const renderLink = item => {
    return (
      <Link to={item.url} key={item.id}>
        {item.label}
      </Link>
    )
  }

  const renderChildMenu = item => {
    if (item.childItems.nodes.length > 0) {
      return (
        <ul>
          {item.childItems.nodes.map(item => {
            return <li key={item.id}>{renderLink(item)}</li>
          })}
        </ul>
      )
    } else {
      return null
    }
  }
  return (
    <NavigationWrapper>
      {items.map(item => {
        renderLink(item)
        renderChildMenu(item)
      })}
    </NavigationWrapper>
  )
}

export default Navigation
