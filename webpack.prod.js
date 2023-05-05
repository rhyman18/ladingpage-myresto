const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-syntax-import-assertions'],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin(
          {
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ['imagemin-mozjpeg', {progressive: true}],
                ],
              },
            },
          },
      ),
    ],
  },
});
