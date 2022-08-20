import React from "react"
import { Wrapper, HomeImage } from "./StaticPost.styles"

//here we use the styled component for image rendering from regular uri
const StaticPost = ({ dataHook }) => {
  const data = dataHook() //can we pass in hook?

  console.log("static: ", data)

  return (
    <Wrapper>
      <HomeImage></HomeImage>
    </Wrapper>
  )
}

export default StaticPost
