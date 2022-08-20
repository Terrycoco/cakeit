import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"
import Nav from "../Navigation/Navigation"
import OverlayMenu from "../OverlayMenu/OverlayMenu"

const Header = () => {
  const { site, wpMenu } = useMenuQuery()

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} alt={site.siteMetadata.title} />
        </Link>
        <Nav items={wpMenu.menuItems.nodes} />
        <OverlayMenu />
      </Content>
    </Wrapper>
  )
}

export default Header
