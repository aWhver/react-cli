const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log("path.join(__dirname, '..', 'index.html')", path.join(__dirname, '..', 'index.html'));
const baseConfig = {
  entry: {
    main: path.join(__dirname, '..', 'index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist/')
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '..', 'index.html'),
      inject: true
    })
  ],
  devServer: {
    inline: true,
    open: true,
   // openPage: '../src/index.html'
  }
}

module.exports = baseConfig;
