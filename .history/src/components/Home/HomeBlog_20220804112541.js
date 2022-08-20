import React from "react"
import { Wrapper, HomeImage } from "./HomeBlog.styles"
import { useHomeQuery } from "../../hooks/useHomeQuery"

const Home = () => {
  const data = useHomeQuery()

  return (
    <Wrapper>
      <HomeImage></HomeImage>
    </Wrapper>
  )
}
