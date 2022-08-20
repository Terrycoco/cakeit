import React, { useState } from "react"
import { GlobalStyles, Primary } from "./Layout.styles"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return <div>{children}</div>
}

export default Layout
