require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `Window Tinting in Durango | Locally Owned & Operated | (970) 335-9600`,
    description: `SunGlo Window Films is Durango's best commercial & home window tinting service.`,
    author: `Roni`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/white_small_logo.png`, // This path is relative to the root of the site.
      },
    },
   
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-fontawesome-css`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
