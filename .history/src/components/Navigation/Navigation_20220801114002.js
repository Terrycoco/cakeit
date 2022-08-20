import React from "react"
import { Link } from "gatsby"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ items }) => {
  return (
    <nav>
      {items.map(item => {
        return (
          <Link id={item.id} to={item.url}>
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation
