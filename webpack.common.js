const webpack = require("webpack")
const path = require("path")

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    // create entry point (and lib with name 'module1' from ./module_1/index.js
    module1: "./module_1"
  }, // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    path: path.resolve(__dirname, "dist"),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "[name].js"
    //library: "[name]",
    //libraryTarget: "umd", // universal module definition
    // the type of the exported library
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
}
