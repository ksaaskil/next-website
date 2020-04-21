import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import "./blog.scss"
import { Box } from "@chakra-ui/core"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      {Posts}
    </Box>
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
