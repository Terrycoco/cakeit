import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <span className="divider">/</span>
      {parent ? (
        <Link to={parent.uri}>
          <span dangerouslySetInnerHTML={{ __html: parent.title }} />
        </Link>
      ) : null}
    </Wrapper>
  )
}

export default BreadCrumb
