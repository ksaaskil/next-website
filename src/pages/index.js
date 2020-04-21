import React from "react"
import "./index.scss"

export const Index = () => {
  return (
    <>
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
