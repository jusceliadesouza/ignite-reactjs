const isDevelopment = process.env.NODE_ENV !== 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


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
    static: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/, //é javascript ou não?-verifica se termina com a extensão
				exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',//integração entre o babel e o webpack
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