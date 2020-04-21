import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

function SEO({ pageDescription, pageTitle, pageUrl }) {
  const {
    site: {
      siteMetadata: { description: siteDescription, siteUrl, title: siteTitle },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Helmet
        defaultTitle={siteTitle}
        htmlAttributes={{ lang: "en" }}
        titleTemplate={`%s | ${siteTitle}`}
      >
        <title>{pageTitle || siteDescription}</title>
        <meta name="description" content={pageDescription || siteDescription} />

        <meta property="og:url" content={pageUrl || siteUrl} />
        {pageUrl && <link rel="canonical" href={pageUrl} />}

        <meta
          property="og:description"
          content={pageDescription || siteDescription}
        />
        <meta
          property="og:title"
          content={`${pageTitle || siteDescription} | ${siteTitle}`}
        />
        {/*<meta property="og:image" content={pageImage || baseOG} />*/}
        {/*
        <meta
          property="twitter:title"
          content={`${pageTitle || siteDescription} | ${siteTitle}`}
        />
        <meta
          property="twitter:card"
          content={pageImage ? "summary_large_media" : "summary"}
        />
        */}
        {/*<meta property="twitter:image" content={pageImage || baseOG} />*/}
      </Helmet>
    </React.Fragment>
  )
}

export default SEO
