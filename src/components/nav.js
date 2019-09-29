import React from "react"
import "./nav.scss"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import InstagramIcon from "../assets/instagram.logo.svg"
import GitHubIcon from "../assets/github.logo.svg"
import ScholarIcon from "../assets/scholar.logo.svg"

const Nav = () => (
  <nav className="nav">
    <div className="nav__items">
      <div className="nav__item">
        <div className="nav__item--birds">
          <OutboundLink href="https://www.birds.cornell.edu/home/bring-birds-back/">
            Bring birds back
          </OutboundLink>
        </div>
      </div>

      <div className="header-icons">
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
      {/**/}
    </div>
  </nav>
)

export default Nav
