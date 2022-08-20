import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"

const Header = () => {
  const data = useMenuQuery()
  console.log(data)

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </Content>
    </Wrapper>
  )
}

export default Header
