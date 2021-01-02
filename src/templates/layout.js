import React from "react"
import "./layout.scss"
import { Navigation } from "../components/nav"
import { Stack } from "@chakra-ui/react"

const Layout = ({ children }) => {
  // const { colorMode } = useColorMode()
  const colorMode = "light"
  return (
    <>
      <Stack
        minH="100vh"
        px={6}
        spacing={0}
        color={colorMode === "light" ? "gray.700" : "gray.100"}
        backgroundColor={colorMode === "light" ? "gray.50" : "gray:900"}
      >
        <Navigation />
        <main>{children}</main>
      </Stack>
    </>
  )
}

export default Layout
