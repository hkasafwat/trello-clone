module.exports = {
  configureWebpack: {
    plugins: [
    ],
    devServer: {
      watchOptions: {
        ignored: /node_modules/,
        poll: true
      }
    }
  }
}