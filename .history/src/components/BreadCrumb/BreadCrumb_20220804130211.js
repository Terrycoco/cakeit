import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) => {
  return <Wrapper>BreadCrumb{console.log("parent: ", parent)}</Wrapper>
}

export default BreadCrumb
