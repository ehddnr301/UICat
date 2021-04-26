const path = require("path");
const HTMLPlguin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
  entry: "./src/js/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"],
  //     },
  //   ],
  // },

  plugins: [
    new HTMLPlguin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "static",
        },
      ],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
