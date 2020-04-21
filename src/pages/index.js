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
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Under construction</span>
            <span className="heading-primary--sub">this page is</span>
          </h1>
        </div>
      </header>
    </>
  )
}

export default () => {
  return <Index />
}
