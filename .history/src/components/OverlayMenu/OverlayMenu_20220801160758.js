import React from "react"
import { Link } from "gatsby"
import InvertedLogo from "../../images/logo-inverted.svg"
import CloseButton from "../../images/close-btn.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Overlay } from "./OverlayMenu.styles"

const OverlayMenuy = ({ menuOpen, callback }) => {
  const { wpMenu } = useMenuQuery()

  return <Overlay menuOpen={menuOpen}></Overlay>
}
