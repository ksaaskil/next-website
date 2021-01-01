import React from "react"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import { Heading } from "@chakra-ui/core"
import { Box, Stack, Text, Flex } from "@chakra-ui/core";
import Img from "gatsby-image"


const Book = ({title, author, description, imgData }) => {
  return (<Flex p="6">
    <Flex width="250px">
      {!!imgData ? <Img fixed={imgData.childImageSharp.fixed} /> : null}
    </Flex>
    <Box>
      <Text as="h3" fontWeight="bold" fontSize="xl">{title}</Text>
      <Text as="p"><Text as="i">{author}</Text></Text>
      <Text>{description}</Text>
    </Box>
    </Flex>
  )
}

const BookList = ({books, title}) => {
  return (
    <Box p="6">
      <Text fontSize="3xl" fontWeight="bold">{title}</Text>
    <Stack spacing="48px">
      {books.map(book => 
        <Book key={book.title} title={book.title} author={book.author}
        description={book.description} imgData={book.imgData} />)}
      </Stack>
    </Box>)
}

export default ({ data }) => {
  const nonTechBooks = [
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      cover: "how-to-influence"
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      cover: "how-to-influence"
    },
    {
      title: "The Clean Coder",
      author: "Robert C. Martin",
      cover: "how-to-influence"
    },
    {
      title: "Concise Laws of Human Nature",
      author: "Robert Greene",
      cover: "how-to-influence"
    }
  ]
  
  const techBooks = [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppman",
      cover: "how-to-influence"
    },
    {
      title: "The Pragmatic Programmer: Your Journey to Mastery, 20th Anniversary Edition",
      author: "Andy Hunt, Dave Thomas",
      cover: "how-to-influence"
    },
    {
      title: "Functional Programming in Scala",
      author: "Paul Chiusano and Rúnar Bjarnason",
      cover: "how-to-influence"
    } ,
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      cover: "how-to-influence"
    }
  ]
  const allImages = data.allImages.edges.map(e => e.node);

  const nonTechBooksWithImgData = nonTechBooks.map(book => {
    const maybeImg = allImages.filter(e => e.name == book.cover)
    console.log(maybeImg)
    return {
      ...book,
      imgData: maybeImg.length > 0 ? maybeImg[0] : null
    }
  })

  const techBooksWithImgData = techBooks.map(book => {
    const maybeImg = allImages.filter(e => e.name == book.cover)
    return {
      ...book,
      imgData: maybeImg ? maybeImg[0] : null
    }
  })

  return (
    <>
      <SEO
        pageTitle="Kimmo's bookshelf"
        pageDescription="My favorite books for developers"
      />
      <SingleSection heading="Kimmo's bookshelf">
        <BookList title="Non-technical books" books={nonTechBooksWithImgData} />
        <BookList title="Technical books" books={techBooksWithImgData} />
      </SingleSection>
    </>
  )
}

export const query = graphql`
  query covers {
    howToInfluence: file(relativePath: { eq: "how-to-influence.jpg" }) {
      childImageSharp {
        fixed(width:150) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth:250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allImages: allFile(filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }) {
      edges {
        node {
          base
          name
          childImageSharp {
            fixed(width:150) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth:250) {
              base64
              src
              srcSet
              aspectRatio
              sizes
            }
          }
        }
      }
    }
  }
`
