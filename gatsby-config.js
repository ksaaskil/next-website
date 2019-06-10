/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    /*
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    */

    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: process.env.GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        // icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
