import React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"

export const SingleSection = ({
  children,
  heading,
  subheading = null,
  props,
}) => (
  <Box as="section" maxW="1000px" mx="auto" py={12} {...props}>
    {heading ? (
      <Heading
        as="h2"
        fontSize="3xl"
        fontWeight={900}
        textAlign="center"
        mb={6}
        letterSpacing="wide"
        lineHeight="short"
      >
        {heading}
      </Heading>
    ) : null}
    {subheading ? (
      <Text fontSize="2xl" textAlign="center" mb={12} lineHeight="short">
        {subheading}
      </Text>
    ) : null}
    {children}
  </Box>
)

export default SingleSection
