import React from "react"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost"
import { Wrapper } from "./LatesBlogPost.styles"

const LatestBlogPost = () => {
  const post = useLatestBlogPost()
  console.log(post)
  return <Wrapper>latest post</Wrapper>
}

export default LatestBlogPost
