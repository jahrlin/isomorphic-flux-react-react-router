const path = require('path');
const webpack = require('webpack');
const assetsPath = path.join(__dirname, '..', 'dist', 'assets');

const commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    query: {
      plugins: ['transform-decorators-legacy', 'transform-object-assign'],
    },
    include: path.join(__dirname, '..', 'src'),
    exclude: path.join(__dirname, '..', 'node_modules'),
  },
  { test: /\.json$/, loader: 'json-loader' },
  {
    test: /\.(png|jpg|jpeg|gif|ico)$/,
    loader: 'url',
    query: {
      name: '[hash].[ext]',
      limit: 10000,
    },
  },
  { test: /\.html$/, loader: 'html-loader' },
  { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
];

module.exports = {
  // The configuration for the server-side rendering
  name: 'server-side rendering',
  context: path.join(__dirname, '..', 'src'),
  entry: {
    server: './server',
  },
  target: 'node',
  output: {
    // The output directory as absolute path
    path: assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: 'server.js',
    // The output path from the view of the Javascript
    publicPath: '/assets/',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.css$/,
        loader: 'css/locals',
      },
    ]),
  },
  resolve: {
    root: [path.join(__dirname, '..', 'src')],
    extensions: ['', '.js', '.jsx', '.css'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVCLIENT__: false,
      __DEVSERVER__: true,
    }),
  ],
};
