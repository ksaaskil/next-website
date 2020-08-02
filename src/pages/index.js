import React from "react"
import "./index.scss"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Box } from "@chakra-ui/core"
import BlogIndex from "../components/blog-list"

export default ({ props }) => {
  const data = useStaticQuery(
    graphql`
      query blogList {
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
  )
  return (
    <>
      <SEO
        pageTitle="Kimmo Sääskilahti's blog"
        pageDescription="My blog and stuff"
      />
      <BlogIndex data={data} {...props} />
    </>
  )
}
