import React from "react"
import { Wrapper, HomeImage } from "./StaticPost.styles"

//here we use the styled component for image rendering from regular uri
const StaticPost = ({ dataHook }) => {
  const data = dataHook() //can we pass in hook?
  const imageData = data.featuredImage.node.localFile.publicURL
  console.log("static content: ", data.content)

  return (
    <Wrapper>
      <HomeImage image={imageData}></HomeImage>
      <div className="about-text">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </Wrapper>
  )
}

export default StaticPost
