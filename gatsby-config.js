module.exports = {
  siteMetadata: {
    title: 'Pakuj z Tymkiem',
    description: 'Siema, mam na imię Tymek i pomogę zdobyć ci wymarzoną formę!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-159583293-1',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        path: './src/layouts/index.js',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
};
