const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
  ignored: /node_modules/,
  aggregateTimeout: 300,
   //If watching does not work for you,
   //try out this option.
   //Watching does not work with NFS and machines in VirtualBox.
  poll: 1000
  }
})
