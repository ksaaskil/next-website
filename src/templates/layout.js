import React from "react"
import "./layout.scss"
import { Navigation } from "../components/nav"
import { Stack } from "@chakra-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <Stack minH="90vh" px={6} spacing={0}>
        <Navigation />
        <main>{children}</main>
      </Stack>
    </>
  )
}

export default Layout
