module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Code\:400,700`,
          `Lato\:100,200,300,400,500,600,700,800,900`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/icon-512.png`,
        icons: [
          {
            src: `/assets/icon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
        name: `Kimmo Sääskilahti's website`,
        short_name: `Kimmo Sääskilahti`,
        start_url: `/`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared accross all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
  ],
  siteMetadata: {
    title: "Kimmo Sääskilahti",
    titleTemplate: "%s · The Real Hero",
    description: "My homepage",
    siteUrl: "https://kimmosaaskilahti.fi", // No trailing slash allowed!
    // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@occlumency",
  },
}
