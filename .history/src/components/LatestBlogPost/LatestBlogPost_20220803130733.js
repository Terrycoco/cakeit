import React from "react"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost"
import { Wrapper } from "./LatesBlogPost.styles"
import { Link } from "gatsby"

const LatestBlogPost = () => {
  const post = useLatestBlogPost()
  console.log(post)
  return (
    <Wrapper>
      <h4>{post.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      <Link to={`blog\${post.uri}`}>
        <p>Read more...</p>
      </Link>
    </Wrapper>
  )
}

export default LatestBlogPost
