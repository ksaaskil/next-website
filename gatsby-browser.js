import React from "react"
import Layout from "./src/templates/layout"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import customTheme from "./theme/theme"
import "prismjs/themes/prism-tomorrow.css"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        {element}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
