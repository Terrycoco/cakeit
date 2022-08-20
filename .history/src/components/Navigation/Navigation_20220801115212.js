import React from "react"
import { Link } from "gatsby"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ items }) => {
  const renderLink = item => {
    return (
      <Link to={item.url} id={item.id}>
        {item.label}
      </Link>
    )
  }

  const renderChildMenu = item => {
    if (item.childItems.length > 0) {
      return (
        <ul>
          {item.childItems.nodes.map(item => {
            return renderLink(item)
          })}
        </ul>
      )
    }
  }
  return (
    <nav>
      return{" "}
      {items.map(item => {
        renderLink(item)
        renderChildMenu(item)
      })}
    </nav>
  )
}

export default Navigation
