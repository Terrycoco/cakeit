import React from "react"
import { Wrapper, FeaturedImage } from "./Blurb.styles"

//here we use the styled component for image rendering from regular uri
const Blurb = ({ dataHook }) => {
  const data = dataHook() //run the hook
  const imageData = data.featuredImage
    ? data.featuredImage.node.localFile.publicURL
    : null
  console.log("data: ", data)

  return (
    <Wrapper>
      {imageData ? <FeaturedImage image={imageData}></FeaturedImage> : null}
      <div className="about-text">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </Wrapper>
  )
}

export default Blurb
