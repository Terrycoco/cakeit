import React from "react"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost"
import { Wrapper } from "./LatesBlogPost.styles"
import { Link } from "gatsby"

const LatestBlogPost = () => {
  const post = useLatestBlogPost()
  console.log(post)
  return (
    <Wrapper>
      <Link to={post.uri}>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      </Link>
    </Wrapper>
  )
}

export default LatestBlogPost
