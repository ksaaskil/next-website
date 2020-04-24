import React from "react"
import "./index.scss"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Box } from "@chakra-ui/core"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
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
        pageTitle="Kimmo Sääskilahti's homepage"
        pageDescription="My blog and stuff"
      />
      <SingleSection
        heading="Kimmo Sääskilahti's homepage"
        subheading="Under construction this page is."
      >
        <Box boxShadow="lg">
          <Img
            fluid={data.reindeer.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        </Box>
      </SingleSection>
    </>
  )
}
