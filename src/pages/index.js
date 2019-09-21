import React from "react"
import "./index.scss"
import Layout from "../components/layout"

export const Index = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Planet Earth</span>
          <span className="heading-primary--sub">is amazing</span>
        </h1>
      </div>
    </header>
  )
}

export default () => {
  return (
    <Layout>
      <Index />
    </Layout>
  )
}
