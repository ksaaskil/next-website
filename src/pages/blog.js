import React from "react"
import { Link, graphql } from "gatsby"
import { Box, PseudoBox, Stack, Text, useColorMode } from "@chakra-ui/core"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import Img from "gatsby-image"

const PostLink = ({ slug, post, img }) => {
  const { colorMode } = useColorMode()

  return (
    <PseudoBox m={2}>
      <Link to={slug}>
        <PseudoBox
          backgroundColor={colorMode === "dark" ? "gray.600" : "gray.100"}
          _hover={{
            bg: colorMode === "dark" ? "gray.500" : "gray.200",
            /*boxShadow: "outline",*/
            transform: "translate(-3px, -3px)",
          }}
          rounded="lg"
          p={4}
          display={{ md: "flex" }}
        >
          <Box rounded="lg" flexShrink={0} width={{ md: 200 }}>
            <Img fluid={img} />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
              color="teal.600"
            >
              {post.frontmatter.title}
            </Text>
            <Link
              mt={1}
              display="block"
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
              href="#"
            >
              {post.frontmatter.description}
            </Link>
            <Text mt={2} color={colorMode === "dark" ? "gray.200" : "gray.600"}>
              {post.excerpt}
            </Text>
          </Box>
        </PseudoBox>
      </Link>
    </PseudoBox>
  )
}

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <>
      <SEO pageTitle="Kimmo Sääskilahti's blog" />
      <SingleSection heading="Blog posts">
        <Stack>
          {posts.map(({ node: post }) => (
            <PostLink
              key={post.fields.slug}
              slug={post.fields.slug}
              post={post}
              img={data.reindeer.childImageSharp.fluid}
            />
          ))}
        </Stack>
      </SingleSection>
    </>
  )
}
export const pageQuery = graphql`
  query blogIndex {
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
          }
          fields {
            slug
          }
        }
      }
    }
    reindeer: file(relativePath: { eq: "reindeer-riisitunturi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default BlogIndex
