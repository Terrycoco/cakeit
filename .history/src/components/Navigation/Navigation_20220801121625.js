import React from "react"
import { Link } from "gatsby"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ items }) => {
  const renderLink = item => {
    console.log("item is:", item.label)
    return (
      <li>
        {" "}
        <Link to={item.url} key={item.id}>
          {item.label}
        </Link>
      </li>
    )
  }

  const renderChildMenu = item => {
    console.log("children", item.childItems.nodes.length)
    if (item.childItems.nodes.length > 0) {
      console.log("item has child")
      return (
        <ul>
          {item.childItems.nodes.map(item => {
            return <li key={item.id}>{renderLink(item)}</li>
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
