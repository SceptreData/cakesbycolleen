const config = require("./config.json")
const infoData = require("./content/data/info.json")

module.exports = {
  //this makes the site config available to forestry cms
  // pathPrefix: process.env.PATH_PREFIX || "/",
  siteMetadata: {
    title: config.title,
    description: config.description,
    repoUrl: config.repository_url,
    about: config.about,
    contact: config.contact,
    primaryColor: config.primary_color,
    infoData: infoData,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "uploads",
        path: `${__dirname}/content/uploads`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          //   options: { pathFields: ["image", "cover"] }, //   resolve: "gatsby-remark-normalize-paths", // { // "gatsby-remark-relative-images",
          // },
          {
            resolve: `@forestryio/gatsby-remark-normalize-paths`,
            options: { pathFields: ["image", "cover", "hero_image"] },
          },
          // `gatsby-remark-relative-images`,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "content/uploads",
            },
          },
        ],
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },

    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [`${__dirname}/src/styles/_vars.scss`],
      },
    },

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Solway`,
            variants: ["300", "500", "700"],
            subsets: ["latin"],
          },
          {
            family: `Nanum Myeongjo`,
            variants: ["400", "700", "800"],
            subsets: ["latin"],
          },
          {
            family: `Raleway`,
            variants: ["300", "400", "400i", "500", "600", "600i", "700"],
            subsets: ["latin"],
          },
          {
            family: `Lora`,
            variants: ["400", "700"],
            subsets: ["latin"],
          },
          {
            family: `Frank Ruhl Libre`,
            variants: ["300", "400", "500", "700", "900"],
            subsets: ["latin"],
          },
        ],
      },
    },
    `gatsby-plugin-nprogress`,
    `gatsby-plugin-robots-txt`,

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: ``,
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cakes by Colleen`,
        short_name: `Cakes-Colleen`,
        start_url: `/`,
        background_color: `#f7fafc`,
        theme_color: `#f687b3`,
        // icon: `src/img/birthday-cake.png`,
        display: `standalone`,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    // `gatsby-plugin-catch-links`,
    // "gatsby-plugin-offline",
  ],
}
