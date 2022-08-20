import React, { useState } from "react"
import { GlobalStyles, Primary } from "./Layout.styles"
import Hamburger from "../Hamburger/Hamburger"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return <div>{children}</div>
}

export default Layout
