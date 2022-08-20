import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"

const CTAArea = () => {
  const data = useCTAAreaQuery()
  console.log(data)

  return <Wrapper></Wrapper>
}

export default CTAArea
