import React from "react"
import { getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles"

const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()
  console.log(data)

  return <div></div>
}

export default Hero
