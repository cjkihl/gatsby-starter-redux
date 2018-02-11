module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Redux Starter',
  },
  pathPrefix: `/gatsby-starter-redux`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
