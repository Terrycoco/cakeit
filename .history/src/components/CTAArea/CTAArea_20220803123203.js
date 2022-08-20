import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"
import CTA from "../CTA/CTA"
import { getImage } from "gatsby-plugin-image"

const CTAArea = () => {
  const {
    cta: { ACF_HomePage: data },
  } = useCTAAreaQuery()
  console.log(data)

  const img1 = getImage(data.cta1Image.localFile)
  const img2 = getImage(data.cta2Image.localFile)
  const img3 = getImage(data.cta3Image.localFile)

  return (
    <Wrapper>
      <CTA key="cta1" img={img1} text={data.cta1Text} link={data.cta1Link} />
      <CTA key="cta2" img={img2} text={data.cta2Text} link={data.cta2Link} />
      <CTA key="cta3" img={img3} text={data.cta3Text} link={data.cta3Link} />
    </Wrapper>
  )
}

export default CTAArea
