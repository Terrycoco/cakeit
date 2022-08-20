import React from "react"
import { useQuote } from "../../hooks/useQuote"
import { Wrapper, Content } from "./Quote.styles"

const Quote = () => {
  const data = useQuote()

  return (
    <Wrapper>
      <Content>quote here</Content>
    </Wrapper>
  )
}

export default Quote
