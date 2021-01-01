import React from "react"
import "./bookshelf.scss"
// import { graphql } from 'gatsby'
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
// import BlogIndex from "../components/blog-list"
import { Heading } from "@chakra-ui/core"
import { Text } from "@chakra-ui/core";

const Book = ({title, author, description}) => {
  return (<>
    <Text fontSize="xl">{title}</Text>
    <Text as="i">{author}</Text>
    <Text>{description}</Text>
    </>
  )
}

const BookshelfHeader = () => {
  return (<Heading>Something</Heading>)
}

const books = [
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    description: "Nice book"
  }
]

const BookList = () => {
  return (<>{books.map(book => 
    <Book key={book.title} title={book.title} author={book.author}
    description={book.description} />)}</>);
}

export default ({ props }) => {
  return (
    <>
      <SEO
        pageTitle="Kimmo's bookshelf"
        pageDescription="My favorite books for developers"
      />
      <SingleSection heading="Kimmo's bookshelf">
        <BookList />
      </SingleSection>
    </>
  )
}
