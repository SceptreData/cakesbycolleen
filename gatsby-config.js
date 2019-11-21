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
    "gatsby-transformer-yaml",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "uploads",
        path: `${__dirname}/content/uploads`,
      },
    },
    // `gatsby-transformer-remark`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts`,
      },
    },

    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [`${__dirname}/src/styles/_vars.scss`],
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
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          //   options: { pathFields: ["image", "cover"] }, //   resolve: "gatsby-remark-normalize-paths", // { // "gatsby-remark-relative-images",
          // },
          `gatsby-remark-relative-images`,
          `gatsby-remark-normalize-paths`,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/img`,
    //     name: "images",
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Solway`,
    //         variants: ["300", "500", "700"],
    //         subsets: ["latin"],
    //       },
    //       {
    //         family: `Nanum Myeongjo`,
    //         variants: ["400", "700", "800"],
    //         subsets: ["latin"],
    //       },
    //       {
    //         family: `Raleway`,
    //         variants: ["300", "400", "400i", "500", "600", "600i", "700"],
    //         subsets: ["latin"],
    //       },
    //       {
    //         family: `Lora`,
    //         variants: ["400", "700"],
    //         subsets: ["latin"],
    //       },
    //       {
    //         family: `Frank Ruhl Libre`,
    //         variants: ["300", "400", "500", "700", "900"],
    //         subsets: ["latin"],
    //       },
    //     ],
    //   },
    // },
    // `gatsby-plugin-nprogress`,
    // `gatsby-plugin-robots-txt`,

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: ``,
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Cakes by Colleen`,
    //     short_name: `Cakes-Colleen`,
    //     start_url: `/`,
    //     background_color: `#f7fafc`,
    //     theme_color: `#f687b3`,
    //     // icon: `src/img/birthday-cake.png`,
    //     display: `standalone`,
    //     theme_color_in_head: false, // This will avoid adding theme-color meta tag
    //   },
    // },
    // `gatsby-plugin-sitemap`,
    // `gatsby-plugin-catch-links`,
    // "gatsby-plugin-offline",
  ],
}
