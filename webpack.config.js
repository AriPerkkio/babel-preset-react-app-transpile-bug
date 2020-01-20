module.exports = {
  entry: "./index.js",
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
