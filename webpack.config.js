var path = require("path");
console.log("ping");
module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./src/app.jsx"]
  },
  output: {
    filename: "[name].js"
  },
  devtool: "eval",
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loaders: ["eslint"], include: path.join(__dirname, "src")}

    ],

    loaders: [
      {test: /\.jsx?$/, loaders: ["babel"], include: path.join(__dirname, "src")},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.json$/, loader: "json", include: path.join(__dirname, "src")}
    ]
  }
};
