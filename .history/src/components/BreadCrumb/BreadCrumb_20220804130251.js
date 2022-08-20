import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) => {
  return <Wrapper>{parent.title}}</Wrapper>
}

export default BreadCrumb
