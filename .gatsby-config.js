module.exports = {
  plugins: [
    "gatsby-plugin-eslint",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat"]
        }
      }
    }
  ]
};
