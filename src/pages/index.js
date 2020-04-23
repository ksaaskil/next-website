import React from "react"
import "./index.scss"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"

export default () => {
  return (
    <>
      <SEO
        pageTitle="Kimmo Sääskilahti's homepage"
        pageDescription="My blog and stuff"
      />
      <SingleSection
        heading="Kimmo Sääskilahti's homepage"
        subheading="Under construction this page is."
      ></SingleSection>
    </>
  )
}
