const path = require("path");

module.exports = (env, argv) => {
  return {
    entry: "./src/js/game.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "public/code"),
    },
    experiments: {
      topLevelAwait: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: argv.mode == "development",
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: argv.mode == "development",
              },
            },
          ],
        },
      ],
    },
  };
};
