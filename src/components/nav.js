import React from "react"
import "./nav.scss"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import InstagramIcon from "../assets/instagram.logo.svg"
import GitHubIcon from "../assets/github.logo.svg"
import ScholarIcon from "../assets/scholar.logo.svg"
import DevToIcon from "../assets/devto.logo.svg"
import { Link } from "gatsby"
import { Link as ChakraUILink } from "@chakra-ui/core"
import { Stack, Icon } from "@chakra-ui/core"
import NavLink from "./navLink"

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
        <OutboundLink href="https://dev.to/ksaaskil">
          <DevToIcon />
        </OutboundLink>
      </div>
      {/**/}
    </div>
  </nav>
)

export function Navigation() {
  return (
    <Stack
      as="nav"
      isInline
      justify="space-between"
      align="center"
      py={4}
      mb={6}
    >
      <Link to="/" aria-label="Home">
        {/*<Icon name="Logo" color="red.500" h={6} w="auto" />*/}
        Home
      </Link>
      <Stack isInline>
        <NavLink text="Blog" path="/blog/" />
        <ChakraUILink href="https://www.instagram.com/saaskimmo/" isExternal>
          Instagram
        </ChakraUILink>
      </Stack>
    </Stack>
  )
}

export default Navigation
