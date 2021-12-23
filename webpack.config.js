module.exports = {
  plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
        }) ,
  ],
  webpack: {
    configure: webpackConfig => {
      // other stuff with webpackConfig
      return {
        ...webpackConfig,
        ignoreWarnings: [/Failed to parse source map/],
      }
    },
  }
  }