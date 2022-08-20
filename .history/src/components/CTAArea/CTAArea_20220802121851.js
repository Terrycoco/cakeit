import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"
import CTA from "../CTA/CTA"
import { getImage } from "gatsby-plugin-image"

const CTAArea = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useCTAAreaQuery()
  console.log(data)

  const img1 = getImage(data.cta1Image.localFile)
  const img2 = getImage(data.cta2Image.localFile)
  const img3 = getImage(data.cta3Image.localFile)

  return (
    <Wrapper>
      <CTA img={img1} text={data.cta1Text} link={data.cta1Link} />
    </Wrapper>
  )
}

export default CTAArea
