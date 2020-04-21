import React from "react"
import "./index.scss"
import SEO from "../components/seo"
export const Index = () => {
  return (
    <>
      <SEO
        pageTitle="Kimmo Sääskilahti's homepage"
        pageDescription="My blog and stuff"
      />
      Under construction this page is.
    </>
  )
}

export default () => {
  return <Index />
}
