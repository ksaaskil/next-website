import React from "react"
import "./index.scss"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import BlogIndex from "../components/blog-list"
import { useStaticQuery } from "gatsby"
import { Box, Flex, Stack, Text } from "@chakra-ui/core"
import Img from "gatsby-image"

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
        textAlign={{ base: "center", md: "left" }}
      >
        <Text as="h2" fontWeight="bold" fontSize="2xl">
          Hi! I&apos;m Kimmo Sääskilahti.
        </Text>
        <Text fontSize="lg">
          I&apos;m a senior software developer at Silo AI.
        </Text>
      </Stack>
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
