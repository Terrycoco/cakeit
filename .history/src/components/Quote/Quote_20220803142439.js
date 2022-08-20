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
        {data.quote1Text}
      </Content>
    </Wrapper>
  )
}

export default Quote
