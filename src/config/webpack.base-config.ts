const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(
  "path.join(__dirname, '..', 'index.html')",
  path.join(__dirname, '..', 'index.html')
);

const baseConfig = {
  entry: {
    main: path.join(__dirname, '..', 'index.tsx')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist/')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'ts-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|webp|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[hash:8].[ext]'
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
    open: true
    // openPage: '../src/index.html'
  }
};

module.exports = baseConfig;
