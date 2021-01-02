import React from "react"
import "./nav.scss"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import InstagramIcon from "../assets/instagram.logo.svg"
import GitHubIcon from "../assets/github.logo.svg"
import ScholarIcon from "../assets/scholar.logo.svg"
import DevToIcon from "../assets/devto.logo.svg"
import { Link as GatsbyLink } from "gatsby"
import { Link, Switch } from "@chakra-ui/core"
import { Stack, Icon, useColorMode } from "@chakra-ui/core"

/* const Nav = () => (
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
    </div>
  </nav>
) */

const spacing = "2rem"

export const Navigation = () => {
  // const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Stack
      as="nav"
      isInline
      justify="space-around"
      py={4}
      mb={6}
      flexWrap="wrap"
    >
      <Stack isInline spacing={{ spacing }}>
        {/* <Icon name={colorMode === "dark" ? "moon" : "sun"} />
        <Switch
          isChecked={colorMode === "dark"}
          onChange={() => toggleColorMode()}
        /> */}

        <Link as={GatsbyLink} to="/">
          Home
        </Link>
        <Link as={GatsbyLink} to="/bookshelf">
          Bookshelf
        </Link>
      </Stack>
      <Stack isInline spacing={{ spacing }} overflowWrap="normal">
        <Link href="https://www.instagram.com/saaskimmo/" isExternal>
          Instagram
        </Link>
        <Link href="https://github.com/ksaaskil/" isExternal>
          GitHub
        </Link>
        <Link href="https://ksaaskil.github.io" isExternal>
          CV
        </Link>
        <Link
          href="https://scholar.google.fi/citations?user=r67e0OEAAAAJ&hl=en"
          isExternal
        >
          <span>Google Scholar</span>
        </Link>
        <Link href="https://dev.to/ksaaskil" isExternal>
          dev.to
        </Link>
      </Stack>
    </Stack>
  )
}

export default Navigation
