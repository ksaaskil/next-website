import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Box } from "@chakra-ui/core"
import SEO from "../components/seo"

const PostLink = ({ slug, title, excerpt, post }) => {
  return (
    <Box>
      <Link to={slug}>
        <Heading>{post.frontmatter.title}</Heading>
      </Link>
      <p>{post.excerpt}</p>
    </Box>
  )
}

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <>
      <SEO pageTitle="Kimmo Sääskilahti's blog" />
      <Box>
        <Heading>My Blog</Heading>
        <ul>
          {posts.map(({ node: post }) => (
            <PostLink slug={post.fields.slug} post={post} />
          ))}
        </ul>
      </Box>
    </>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
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
