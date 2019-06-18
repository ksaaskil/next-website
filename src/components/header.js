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
        <InstagramIcon height={"100%"} viewBox={"0 0 132 132"} />
      </a>
      <a href="https://github.com/ksaaskil">
        <GitHubIcon height={"100%"} viewBox={"0 0 1024 1024"} />
      </a>
      <a href="https://scholar.google.fi/citations?user=r67e0OEAAAAJ&hl=en">
        <ScholarIcon height={"100%"} viewBox={"0 0 1755 1755"} />
      </a>
    </div>
  </div>
)

export default Header
