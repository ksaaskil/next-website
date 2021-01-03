import React from "react"
import "./index.scss"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import BlogIndex from "../components/blog-list"
import { useStaticQuery } from "gatsby"
import { Icon, Box, Flex, Stack, Text, HStack } from "@chakra-ui/react"
import Img from "gatsby-image"
import ExternalLink from "../components/external-link"
import DevToIcon from "../assets/devto.logo.svg"
import InstagramIcon from "../assets/instagram.logo.svg"
import GitHubIcon from "../assets/github.logo.svg"
import GoogleScholarIcon from "../assets/scholar.logo.svg"
import { FaHeart } from "react-icons/fa"

const Hello = () => {
  return (
    <Box>
      <Text as="h2" fontWeight="bold" fontSize="2xl">
        Hi! I&apos;m Kimmo Sääskilahti.
      </Text>
      <Text fontSize="lg">
        I&apos;m a senior software developer at Silo AI.
      </Text>
    </Box>
  )
}

const AboutSite = () => {
  return (
    <Box>
      <Text>
        This page has been built with{" "}
        <ExternalLink href="https://www.gatsbyjs.com/">Gatsby</ExternalLink> and{" "}
        <ExternalLink href="https://chakra-ui.com/">Chakra UI</ExternalLink>.
        You can find the source code{" "}
        <ExternalLink href="https://github.com/ksaaskil/kimmosaaskilahti.fi">
          here
        </ExternalLink>
        . The layout and content are inspired by{" "}
        <ExternalLink href="https://victoria.dev">victoria.dev</ExternalLink>.
      </Text>
    </Box>
  )
}

const Links = () => {
  return (
    <Stack spacing={4}>
      <Text>You can find me also in</Text>
      <HStack
        spacing={6}
        alignItems="center"
        justifyContent={{ base: "center", md: "start" }}
      >
        <ExternalLink href="https://dev.to/ksaaskil">
          <Icon alignSelf="center" boxSize={8} viewBox="0 0 132 66">
            <DevToIcon />
          </Icon>
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com/saaskimmo">
          <Icon boxSize={8} viewBox="0 0 132 132">
            <InstagramIcon />
          </Icon>
        </ExternalLink>
        <ExternalLink href="https://github.com/ksaaskil">
          <Icon boxSize={8} rounded={16} viewBox="0 0 1024 1024">
            <GitHubIcon />
          </Icon>
        </ExternalLink>
        <ExternalLink href="https://scholar.google.fi/citations?user=r67e0OEAAAAJ&hl=en">
          <Icon boxSize={8} rounded={16} viewBox="0 0 1755 1755">
            <GoogleScholarIcon />
          </Icon>
        </ExternalLink>
      </HStack>
    </Stack>
  )
}

const Hi = ({ data }) => {
  return (
    <Box px={8} mb={12} display={{ md: "flex" }}>
      <Flex align="center">
        <Box width="250px" mx="auto" borderRadius="125px" overflow="hidden">
          <Img fluid={data.me.childImageSharp.fluid} />
        </Box>
      </Flex>
      <Stack
        width="100%"
        ml={{ md: 12 }}
        mt={{ base: 12, md: 0 }}
        spacing={8}
        textAlign={{ base: "center", md: "left" }}
      >
        <Hello />

        <ILove />
        <Links />
        <AboutSite />
      </Stack>
    </Box>
  )
}

const loves = [
  {
    name: "Science",
  },
  {
    name: "Getting ideas",
  },
  {
    name: "Programming",
  },
  {
    name: "Developing",
  },
  {
    name: "Birds",
  },
  {
    name: "Living Things",
  },
  {
    name: "Dancing",
  },
  {
    name: "Photography",
  },
  {
    name: "Reading",
  },
  {
    name: "Brainstorming",
  },
  {
    name: "Yoga",
  },
  {
    name: "Learning",
  },
  {
    name: "Solving Problems",
  },
  {
    name: "Organizing",
  },
]

const INTERVAL_MS = 3000

const ILove = () => {
  const [ind, setInd] = React.useState(0)

  React.useEffect(() => {
    const interval = setTimeout(() => {
      const newInd = (ind + 1) % loves.length
      console.log(`Setting to ${newInd}`)
      setInd(newInd)
    }, INTERVAL_MS)
    return () => clearTimeout(interval)
  }, [ind])

  const [opacity, setOpacity] = React.useState(0)

  React.useEffect(() => {
    const opacityInterval = setTimeout(() => {
      const newOpacity = Math.abs(opacity - 1)
      console.log(`Setting to opacity ${opacity}`)
      setOpacity(newOpacity)
    }, INTERVAL_MS / 2)
    return () => clearTimeout(opacityInterval)
  }, [opacity])

  return (
    <Box>
      <Text>
        <Text as="span" textTransform="uppercase" letterSpacing={2}>
          I <Icon color="red.500" mx={2} as={FaHeart} />{" "}
          <Text as="span" transition="opacity 0.5s" opacity={opacity}>
            {loves[ind].name}
          </Text>
        </Text>
      </Text>
    </Box>
  )
}

export default ({ props }) => {
  const data = useStaticQuery(
    graphql`
      query blogList {
        allMdx(
          filter: { frontmatter: { published: { eq: true } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                date(formatString: "MMMM Do, YYYY")
                title
                description
                thumbnail
              }
              fields {
                slug
              }
            }
          }
        }
        reindeer: file(relativePath: { eq: "reindeer.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        me: file(relativePath: { eq: "IMG_8950.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <>
      <SEO
        pageTitle="Kimmo Sääskilahti | kimmosaaskilahti.fi"
        pageDescription="Kimmo Sääskilahti, senior software developer"
      />
      <SingleSection>
        <Hi data={data} {...props} />
        <Text
          as="h2"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          mb={6}
        >
          My blog posts
        </Text>
        <BlogIndex data={data} {...props} />
      </SingleSection>
    </>
  )
}
