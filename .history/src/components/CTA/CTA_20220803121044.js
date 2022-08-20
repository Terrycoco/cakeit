import React from "react"
import { Link } from "gatsby"
import {
  StyledImg,
  CTAImage,
  CTAImageTextWrapper,
  CTAImageText,
} from "./CTA.styles"

const CTA = ({ img, link, text }) => {
  return (
    <CTAImage>
      <StyledImg image={img} alt={text} />
      <Link to={link}>
        <CTAImageTextWrapper>
          <CTAImageText>
            <h2>{text}</h2>
          </CTAImageText>
        </CTAImageTextWrapper>
      </Link>
    </CTAImage>
  )
}

export default CTA
