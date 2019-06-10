import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = props => (
  <div style={{ marginBottom: `1.5rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>Kimmo Sääskilahti</h3>
    </Link>
    <ul style={{ float: `right` }}>
      <ListLink to="/" style={{ textShadow: "none", margin: "15px" }}>
        Home
      </ListLink>
      <ListLink to="/about/" style={{ textShadow: "none" }}>
        About
      </ListLink>
    </ul>
  </div>
)

export default Header
