const path = require('path');
const extract = require('mini-css-extract-plugin')

const config = {
  mode: 'development',
  entry: ["@babel/polyfill", path.resolve(__dirname, '../source/client.js')],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/(node_modules)/",
        options: {
          presets: ['@babel/preset-env','@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [extract.loader, "css-loader?modules=true&localIdentName=[hash:base64:15]"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new extract({
      filename: "style.css"
    })
  ],
  target: 'web',
}

module.exports = config;
