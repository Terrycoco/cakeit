import React from "react"
import { Link } from "gatsby"
import InvertedLogo from "../../images/logo-inverted.svg"
import CloseButton from "../../images/close-btn.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Overlay } from "./OverlayMenu.styles"

const OverlayMenuy = ({ menuOpen, callback }) => {
  const { wpMenu } = useMenuQuery()

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img className="invertedLogo" src={InvertedLogo} alt="white-logo" />
        <ul className="overlayMenu">
          {wpMenu.menuItems.nodes.map(item =>
            !item.parentId ? (
              <li key={item.id}>
                <Link key={`a${item.id}`} to={item.url}>
                  {item.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </Overlay>
  )
}
