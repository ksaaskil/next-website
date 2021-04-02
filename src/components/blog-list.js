import React from "react"
import { Link } from "gatsby"
import { Box, Stack, Text } from "@chakra-ui/react"
import Img from "gatsby-image"

const PostLink = ({ slug, post, img }) => {
  // const { colorMode } = useColorMode()
  const colorMode = "light"

  return (
    <Box mx={2} my={4}>
      <Link to={slug}>
        <Box
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
          <Stack mt={{ base: 4, md: 0 }} ml={{ md: 6 }} spacing={1}>
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="md"
              letterSpacing="wide"
              color="teal.600"
            >
              {post.frontmatter.title}
            </Text>
            <Text>
              <Text as="i">{post.frontmatter.description}</Text>
            </Text>
            <Text
              mt={2}
              fontSize="md"
              color={colorMode === "dark" ? "gray.200" : "gray.600"}
            >
              {post.excerpt}
            </Text>
          </Stack>
        </Box>
      </Link>
    </Box>
  )
}

export default function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx

  return (
    <Stack spacing={12}>
      {posts.map(({ node: post }) => {
        const thumbnail = post.fields.thumbnail || "reindeer"
        return (
          <PostLink
            key={post.fields.slug}
            slug={post.fields.slug}
            post={post}
            img={data[thumbnail].childImageSharp.fluid}
          />
        )
      })}
    </Stack>
  )
}
