import "../styles/global.css"
import React from "react"
import "./layout.scss"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kimmo Sääskilahti's home page</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="content">{children}</div>
  </>
)
