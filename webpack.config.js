const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = !process.argv[2];

console.log(isDev);

module.exports = {
  mode: !isDev ? 'production' : 'development',
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname, 'example/js'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-shorthand-properties']
          }
        }
      },
      {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: true,
                sourceMap: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer({ grid: true })],
                sourceMap: isDev
              }
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: isDev
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ExtractTextPlugin({
      filename: '../css/main.css'
    }),
    !isDev ?
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      }) : { apply: () => { } }
  ],
  devtool: !isDev ? false : 'source-map',
  watch: isDev
};



