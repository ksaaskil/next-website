import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import { Heading, Text } from "@chakra-ui/core"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO
        pageTitle={frontmatter.title}
        pageDescription={frontmatter.excerpt}
        pageUrl={`/blog/${frontmatter.canonicalURL || frontmatter.slug}/`}
      />
      <SingleSection>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          mb={12}
          color="gray.900"
        >
          {frontmatter.title}
        </Heading>
        <Text textAlign="center" color="green.500" fontWeight={700} mb={6}>
          {frontmatter.date}
        </Text>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </SingleSection>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        slug
        title
      }
    }
  }
`
