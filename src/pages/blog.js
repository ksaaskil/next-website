import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import { Box } from "@chakra-ui/core"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <>
      <SEO
        pageTitle="Blog"
        pageDescription="Kimmo Sääskilahti's blog"
        pageUrl="https://kimmosaaskilahti.fi/blog"
      />
      <Box bg="black" w="100%" p={4} color="white">
        {Posts}
      </Box>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
