const path = require("path");
const HTMLPlguin = require("html-webpack-plugin");

// export
module.exports = {
  entry: "./src/js/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },

  plugins: [
    new HTMLPlguin({
      template: "./src/index.html",
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
