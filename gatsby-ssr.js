import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { renderToString } from "react-dom/server"
import fetch from "isomorphic-fetch"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const client = new ApolloClient({
    fetch,
  })

  const ConnectedBody = () => (
    <ApolloProvider client={client}>{bodyComponent}</ApolloProvider>
  )

  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: `en` })
// }
