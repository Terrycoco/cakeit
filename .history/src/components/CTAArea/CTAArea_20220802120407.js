import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"

const CTAArea = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useCTAAreaQuery()
  console.log(data)

  return <Wrapper></Wrapper>
}

export default CTAArea
