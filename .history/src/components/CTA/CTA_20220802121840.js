import React from "react"
import {
  StyledImg,
  CTAImage,
  CTAImageTextWrapper,
  CTAImageText,
} from "./CTA.styles"

const CTA = props => {
  return (
    <CTAImage>
      <StyledImg image={props.img} alt={props.text} />
    </CTAImage>
  )
}

export default CTA
