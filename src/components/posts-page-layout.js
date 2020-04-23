import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/core"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <SEO pageTitle={mdx.frontmatter.title} />
      <SingleSection
        heading={mdx.frontmatter.title}
        subheading={mdx.frontmatter.date}
      >
        <Box>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Box>
      </SingleSection>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
