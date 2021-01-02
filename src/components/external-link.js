import React from "react"
import { Link } from "@chakra-ui/react"

const ExternalLink = ({ children, ...props }) => {
  return (
    <Link className="external-link" color="teal.500" isExternal {...props}>
      {children}
    </Link>
  )
}

export default ExternalLink
