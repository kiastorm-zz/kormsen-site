const env = require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Kormsen',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rules: {
          include: 'src/assets/*.svg',
        },
      },
    },
  ],
};
