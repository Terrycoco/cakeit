import React from "react"
import { Wrapper, HomeImage } from "./StaticPost.styles"

//here we use the styled component for image rendering from regular uri
const StaticPost = ({ dataHook }) => {
  const data = dataHook() //run the hook
  const imageData = data.featuredImage
    ? data.featuredImage.node.localFile.publicURL
    : null
  console.log("data: ", data)

  return (
    <Wrapper>
      {imageData ? <HomeImage image={imageData}></HomeImage> : null}
      <div className="about-text">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </Wrapper>
  )
}

export default StaticPost
