import React from "react"
import { Wrapper, HomeImage } from "./Home.styles"
import { useHomeQuery } from "../../hooks/useHomeQuery"

const Home = () => {
  const data = useHomeQuery()

  return (
    <Wrapper>
      <HomeImage></HomeImage>
    </Wrapper>
  )
}
