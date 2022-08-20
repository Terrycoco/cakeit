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
      <CTAImageTextWrapper>
        <CTAImageText>
          <h2>{props.text}</h2>
        </CTAImageText>
      </CTAImageTextWrapper>
    </CTAImage>
  )
}

export default CTA
