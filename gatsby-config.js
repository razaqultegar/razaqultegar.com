require('dotenv').config();

// also load node-env for each environment
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
});

module.exports = {
  siteMetadata: {
    title: 'Razaqul Tegar',
    description:
      'Razaqul Tegar is a lucky young man born in Banyumas, January 30th. Now doing his professional career as a Full Stack Developer',
    siteUrl: 'https://razaqultegar.com',
    author: 'Razaqul Tegar'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              backgroundColor: 'transparent',
              tracedSVG: true,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true
              }
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Razaqul Tegar',
        short_name: 'Razaqul Tegar',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icons: [
          {
            src: 'favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        anonymize: true,
        respectDNT: true
      }
    },
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: ['X-Clacks-Overhead: GNU Natalie Nguyen']
      }
    }
  ]
};
