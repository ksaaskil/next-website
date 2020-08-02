import React from "react"
import "./index.scss"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import BlogIndex from "../components/blog-list"
import { useStaticQuery } from "gatsby"

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
                thumbnail
              }
              fields {
                slug
              }
            }
          }
        }
        reindeer: file(relativePath: { eq: "reindeer.jpg" }) {
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
      <SingleSection heading="Kimmo Sääskilahti's blog">
        <BlogIndex data={data} {...props} />
      </SingleSection>
    </>
  )
}
