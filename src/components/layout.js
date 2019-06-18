import "../styles/global.css"
import React from "react"
import "./layout.scss"
import { Helmet } from "react-helmet"
import Header from "../components/header"

export default ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kimmo Sääskilahti's home page</title>
      <link
        href="https://fonts.googleapis.com/css?family=Dancing+Script:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="parallax">
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="content">
        <Header />
        <div className="text-box">{children}</div>
      </div>
    </div>
  </>
)
