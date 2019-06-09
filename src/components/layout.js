import "../styles/global.css"
import React from "react"
import "./layout.scss"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kimmo Sääskilahti's home page</title>
    </Helmet>
    <div className="parallax">
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>Kimmo Sääskilahti</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
          </ul>
        </header>
        <div className="text-box">{children}</div>
      </div>
    </div>
  </>
)
