import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Box, Stack, Text } from "@chakra-ui/core"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"

const PostLink = ({ slug, post }) => {
  return (
    <Box m={2}>
      <Link to={slug}>
        <Box
          p={2}
          maxW="m"
          bg="gray.200"
          color="gray.700"
          borderWidth={2}
          rounded={10}
          overflow="hidden"
        >
          <Heading fontSize="lg">{post.frontmatter.title}</Heading>
          <Text fontWeight={400} mb={2}>
            {post.frontmatter.date}
          </Text>
          <Text fontSize="md">{post.frontmatter.description}</Text>
        </Box>
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
            <PostLink slug={post.fields.slug} post={post} />
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
  }
`
export default BlogIndex
