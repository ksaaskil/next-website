import React from "react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/core"

const PostLink = ({ post }) => (
  <Link to={`/blog/${post.frontmatter.slug}`}>
    <Box>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Box>
  </Link>
)
export default PostLink
