import React from "react"
import BlogIndex from "../components/blog-list"
import { graphql, StaticQuery } from "gatsby"

export const pageQuery = graphql`
  query blogIndex {
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
export default function BlogPosts(props) {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => <BlogIndex data={data} {...props} />}
    />
  )
}
