import React, { useState } from "react"
import { GlobalStyles, Primary } from "./Layout.styles"
import Hamburger from "../Hamburger/Hamburger"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen(prev => !prev);

  return (
  <>
  <GlobalStyles />
  <Hamburger handleOverlayMenu={}
  {children}
  </>
  )
}

export default Layout
