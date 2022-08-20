import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) => {
  return <Wrapper>{console.log("parent: ", parent.uri)}</Wrapper>
}

export default BreadCrumb
