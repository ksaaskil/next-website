import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
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
      <OutboundLink href="https://www.instagram.com/saaskimmo/">
        <InstagramIcon />
      </OutboundLink>
      <OutboundLink href="https://github.com/ksaaskil">
        <GitHubIcon />
      </OutboundLink>
      <OutboundLink href="https://scholar.google.fi/citations?user=r67e0OEAAAAJ&hl=en">
        <ScholarIcon />
      </OutboundLink>
    </div>
  </div>
)

export default Header
