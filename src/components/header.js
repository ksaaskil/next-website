import React from "react"
import styles from "../styles/header.module.css"
import InstagramIcon from "../assets/instagram.logo.svg"
import GitHubIcon from "../assets/github.logo.svg"
import ScholarIcon from "../assets/scholar.logo.svg"

const Header = props => (
  <div className={styles.header}>
    <div className={styles.headerName}>
      <h1 className={styles.headerNameH1}>Kimmo Sääskilahti Photography</h1>
    </div>
    <div className={styles.headerIcons}>
      <a href="https://www.instagram.com/saaskimmo/">
        <InstagramIcon />
      </a>
      <a href="https://github.com/ksaaskil">
        <GitHubIcon />
      </a>
      <a href="https://scholar.google.fi/citations?user=r67e0OEAAAAJ&hl=en">
        <ScholarIcon />
      </a>
    </div>
  </div>
)

export default Header
