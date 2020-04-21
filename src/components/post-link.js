import React from "react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/core"

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path}>
    <Box>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Box>
  </Link>
)
export default PostLink
