module.exports = {
  siteMetadata: {
    title: 'Pakuj z Tymkiem',
    description: 'Siema, mam na imię Tymek i pomogę zdobyć ci wymarzoną formę!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
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
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
  ],
};
