import React from "react"
import Layout from "./src/templates/layout"
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "./theme/theme"
import "prismjs/themes/prism-tomorrow.css"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider theme={customTheme}>{element}</ChakraProvider>
}
