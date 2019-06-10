import React from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = props => (
  <div className={styles.header}>
    <Link to="/" className={styles.headerName}>
      <h1 className={styles.headerNameH1}>Kimmo Sääskilahti Photography</h1>
    </Link>
    <ul className={styles.listLinks}>
      <ListLink to="/" className={styles.listLink}>
        Photography
      </ListLink>
      <ListLink to="/about/" className={styles.listLink}>
        About
      </ListLink>
    </ul>
  </div>
)

export default Header
