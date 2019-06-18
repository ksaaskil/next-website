import React from "react"
import styles from "../styles/header.module.css"
import InstagramIcon from "../assets/instagram.logo.svg"
import GitHubIcon from "../assets/github.logo.svg"

const Header = props => (
  <div className={styles.header}>
    <div className={styles.headerName}>
      <h1 className={styles.headerNameH1}>Kimmo Sääskilahti Photography</h1>
    </div>
    <div className={styles.headerIcons}>
      <a href="https://www.instagram.com/saaskimmo/">
        <InstagramIcon width={"2em"} viewBox={"0 0 132 132"} />
      </a>
      <a href="https://github.com/ksaaskil">
        <GitHubIcon width={"2em"} viewBox="0 0 1024 1024" />
      </a>
    </div>
  </div>
)

export default Header
