module.exports = {
  siteMetadata: {
    title: 'Blake Knight',
    description:
      "Charles Blake Knight's homepage. Blake Knight is a web developer and hacker living in Nashville, TN.",
    author: '@blakek'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png'
      }
    },
    'gatsby-plugin-flow',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true
      }
    },
    'gatsby-plugin-styled-components'
  ]
};
