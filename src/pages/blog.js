import React from "react"
import { Link, graphql } from "gatsby"
import {
  Heading,
  Box,
  PseudoBox,
  Stack,
  Text,
  useColorMode,
  Flex,
} from "@chakra-ui/core"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import Img from "gatsby-image"

const PostLink = ({ slug, post, img }) => {
  const { colorMode } = useColorMode()

  return (
    <Box m={2}>
      <Link to={slug}>
        <PseudoBox
          backgroundColor={colorMode === "dark" ? "gray.600" : "gray.100"}
          role="group"
          _hover={{
            bg: colorMode === "dark" ? "gray.500" : "gray.200",
            boxShadow: "outline",
            transform: "translate(-3px, -3px)",
          }}
          rounded="lg"
          overflow="hidden"
        >
          <Flex
            alignItems="start"
            justifyContent="center"
            p={2}
            flexWrap="wrap"
          >
            <Box flex="1" minWidth="100px">
              <Img fluid={img} />
            </Box>
            <PseudoBox flex="2" ml={2} _groupHover={{}}>
              <Heading fontSize="lg">{post.frontmatter.title}</Heading>
              <Text fontWeight={400} mb={2}>
                {post.frontmatter.date}
              </Text>
              <Text fontSize="md">{post.frontmatter.description}</Text>
            </PseudoBox>
          </Flex>
        </PseudoBox>
      </Link>
    </Box>
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
