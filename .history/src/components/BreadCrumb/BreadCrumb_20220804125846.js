import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) => {
  return (
    <Wrapper>
      <Link to={parent.uri}>{parent.title}</Link>
    </Wrapper>
  )
}

export default BreadCrumb
