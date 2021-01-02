import React from "react"
import SEO from "../components/seo"
import SingleSection from "../components/single-section"
import { Box, Stack, Text, Flex, Link } from "@chakra-ui/core"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const BookshelfHeader = () => {
  return (
    <Box>
      <Text fontSize="lg">
        Here are some books that have measurably contributed to my technical and
        non-technical skills.
      </Text>
    </Box>
  )
}

const Book = ({ title, author, description, imgData, url }) => {
  return (
    <Flex p="6">
      <Flex width="300px">
        {imgData ? <Img fixed={imgData.childImageSharp.fixed} /> : null}
      </Flex>
      <Stack width="100%">
        {!url ? (
          <Text as="h3" fontWeight="bold" fontSize="xl">
            {title}
          </Text>
        ) : (
          <Link
            href={url}
            isExternal
            fontWeight="bold"
            fontSize="xl"
            textDecoration="underline"
          >
            {title}
          </Link>
        )}
        <Text as="h3" fontSize="lg">
          <Text as="i">{author}</Text>
        </Text>
        <Text fontSize="md">{description}</Text>
      </Stack>
    </Flex>
  )
}

const BookList = ({ books, title }) => {
  return (
    <Box py="6">
      <Text fontSize="2xl" fontWeight="bold" mb="6">
        {title}
      </Text>
      <Stack spacing="48px">
        {books.map(book => (
          <Book key={book.title} {...book} />
        ))}
      </Stack>
    </Box>
  )
}

export default ({ data }) => {
  const nonTechBooks = [
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      cover: "how-to-influence",
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      cover: "lean-startup",
    },
    {
      title: "The Clean Coder",
      author: "Robert C. Martin",
      cover: "clean-coder",
    },
    {
      title: "Concise Laws of Human Nature",
      author: "Robert Greene",
      cover: "concise-laws",
    },
    {
      title:
        "The Five Dysfunctions of a Team: Participant Workbook for Team Leaders",
      author: "Patrick Lencioni",
      cover: "five-dysfunctions-workbook",
      url:
        "https://www.amazon.com/Five-Dysfunctions-Team-Participant-Workbook/dp/1118118782",
    },
  ]

  const techBooks = [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppman",
      cover: "designing-data-intensive",
    },
    {
      title:
        "The Pragmatic Programmer: Your Journey to Mastery, 20th Anniversary Edition",
      author: "Andy Hunt, Dave Thomas",
      cover: "pragmatic-programmer",
    },
    {
      title: "Functional Programming in Scala",
      author: "Paul Chiusano and Rúnar Bjarnason",
      cover: "functional-programming-in-scala",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      cover: "clean-code",
    },
  ]
  const allImages = data.allImages.edges.map(e => e.node)

  const nonTechBooksWithImgData = nonTechBooks.map(book => {
    const maybeImg = allImages.filter(e => e.name == book.cover)
    console.log(maybeImg)
    return {
      ...book,
      imgData: maybeImg.length > 0 ? maybeImg[0] : null,
    }
  })

  const techBooksWithImgData = techBooks.map(book => {
    const maybeImg = allImages.filter(e => e.name == book.cover)
    return {
      ...book,
      imgData: maybeImg ? maybeImg[0] : null,
    }
  })

  return (
    <>
      <SEO
        pageTitle="Kimmo's bookshelf"
        pageDescription="My favorite books for developers"
      />
      <SingleSection heading="Kimmo's bookshelf">
        <BookshelfHeader></BookshelfHeader>
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
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allImages: allFile(
      filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }
    ) {
      edges {
        node {
          base
          name
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 250) {
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
