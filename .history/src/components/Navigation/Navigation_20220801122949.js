import React from "react"
import { Link } from "gatsby"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ items }) => {
  const renderLink = item => {
    console.log("item is:", item.label)
    return (
      <li key={item.id}>
        <Link to={item.url} key={item.id}>
          {item.label}
        </Link>
      </li>
    )
  }

  const renderChildMenu = item => {
    if (item.childItems.nodes.length > 0) {
      console.log("item has child")
      return (
        <ul key={`parent${item.id}`}>
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
      <ul>
        {items.map(item => {
          return renderLink(item), renderChildMenu(item)
        })}
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
