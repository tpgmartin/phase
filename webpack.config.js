const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    phase: ['core-js', './phase.ts']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    open: true
  },
  plugins: [new htmlWebpackPlugin()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'tslint-loader',
          }
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] },
          },
          {
            loader: 'ts-loader',
          }
        ]
      }
    ]
  }
}
