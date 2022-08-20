import React from "react"
import { useQuote } from "../../hooks/useQuote"
import { Wrapper, Content } from "./Quote.styles"
import QuoteIcon from "../../images/quote.svg"

const Quote = () => {
  const data = useQuote()
  console.log(data)

  return (
    <Wrapper>
      <Content>
        <img src={QuoteIcon} alt="quote" />
        <h6>{data.quote1Text}</h6>
        <p>{data.quote1Author}</p>
      </Content>
    </Wrapper>
  )
}

export default Quote
