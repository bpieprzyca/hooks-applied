const path = require('path');
const {VanillaExtractPlugin} = require('@vanilla-extract/webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    static: './dist',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node-modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
                ['@babel/preset-react', {runtime: 'automatic'}],
              ],
              plugins: ['@vanilla-extract/babel-plugin'],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      App: path.resolve(__dirname, 'src/App'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  plugins: [
    new VanillaExtractPlugin(),
  ],
};
