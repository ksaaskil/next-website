import React from "react"
import "./nav.scss"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import InstagramIcon from "../assets/instagram.logo.svg"
import GitHubIcon from "../assets/github.logo.svg"
import ScholarIcon from "../assets/scholar.logo.svg"
import DevToIcon from "../assets/devto.logo.svg"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@chakra-ui/react"
import { Box, Stack } from "@chakra-ui/react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Icon } from "@chakra-ui/react"

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

const spacing = 8

const NavLink = props => {
  return (
    <Box>
      <Link
        className="nav-link"
        as={props.to ? GatsbyLink : Link}
        fontWeight="600"
        _hover={{ textDecoration: "none" }}
        activeStyle={{
          textShadow: "0 0 0 black",
          fontWeight: 400,
        }}
        {...props}
      />
    </Box>
  )
}

export const Navigation = () => {
  // const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Stack
      as="nav"
      isInline
      justify="space-around"
      py={4}
      pl={12}
      mb={6}
      flexWrap="wrap"
    >
      <Stack isInline spacing={spacing}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bookshelf">Bookshelf</NavLink>
        <NavLink href="https://ksaaskil.github.io" isExternal>
          CV <Icon ml={1} as={FaExternalLinkAlt} />
        </NavLink>
      </Stack>
      {/* <Stack isInline spacing={spacing} overflowWrap="normal">
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
      </Stack> */}
    </Stack>
  )
}

export default Navigation
