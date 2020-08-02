import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"

const CodeBlock = ({ children, className }) => {
  const language = className && className.replace(/language-/, "")
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
