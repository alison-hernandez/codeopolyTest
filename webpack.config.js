const path = require('path');

module.exports = {
  entry: ['./client/index.js'], // assumes your entry point is the index.js in the root of your project folder
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    //publicPath: '/bundleAssets/',
    assetModuleFilename: 'bundleAssets/[name][ext][query]'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource'
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'public/bundleAssets/',
        //       publicPath: 'public/bundleAssets/'
        //     }
        //   }
        // ]
      }
    ]
  }
}
