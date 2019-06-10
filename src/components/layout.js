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
