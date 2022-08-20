import React from "react"
import { Link } from "gatsby"
import { Wrapper, Menu, SubMenu } from "./PostSidebar.styles"

const PostSidebar = ({ date, author, categories }) => (
  <Wrapper>
    <Menu>
      <li className="sidebar-section">
        <span>{date}</span>
      </li>
      <li className="sidebar-section">
        <span>{author}</span>
      </li>
      <li className="sidebar-section">
        <span>Categories</span>

        <SubMenu>
          {categories.map(cat =>
            cat.slug !== "all-posts" ? (
              <li key={cat.id}>
                <Link to={cat.uri} activeClassName="sidebar-highlighted">
                  <span dangerouslySetInnerHTML={{ __html: cat.name }} />
                </Link>
              </li>
            ) : null
          )}
        </SubMenu>
      </li>
    </Menu>
  </Wrapper>
)

export default PostSidebar
