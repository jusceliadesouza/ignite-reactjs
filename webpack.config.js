const isDevelopment = process.env.NODE_ENV !== 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ReactRefreshWebpackPlugin =require('@pmmmwh/react-refresh-webpack-plugin')


module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin (),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx$/, //é javascript ou não?-verifica se termina com a extensão
				exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',//integração entre o babel e o webpack
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/, //verifica se termina com a extensão
        exclude: /node_modules/, 
        use: ['style-loader', "css-loader", "sass-loader"],
      }
    ]
  }
}