import "../styles/global.css"
import React from "react"
import "./layout.scss"
import { Helmet } from "react-helmet"

export default ({ children, titleName = "Kimmo Sääskilahti's homepage" }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="Description" content="Kimmo Sääskilahti's home page."></meta>
      <title>{titleName}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="content">{children}</div>
  </>
)
