import React from "react"
import { getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles"

const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()
  console.log(data)

  const imageData = getImage(data.heroImage.localFile)

  return (
    <Wrapper>
      <StyledImg image={imageData} alt="Hero Image" />
    </Wrapper>
  )
}

export default Hero
