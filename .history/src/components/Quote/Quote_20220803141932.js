import React from "react"
import { useQuote } from "../../hooks/useQuote"
import { Wrapper, Content } from "./Quote.styles"

const Quote = () => {
  const data = useQuote()
  console.log(data)

  return (
    <Wrapper>
      <Content>{data.quote1Text}</Content>
    </Wrapper>
  )
}

export default Quote
