// https://github.com/choonkending/react-webpack-node/blob/master/webpack/webpack.config.prod.js

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineEnvironmentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
const webpack = require('webpack');
const postCssPlugins = require('./postcssPlugins');

const assetsPath = path.join(__dirname, '..', 'dist', 'assets');
const publicPath = '/assets/';

const commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    query: {
      plugins: [
        'transform-decorators-legacy',
        'transform-object-assign',
        'transform-react-remove-prop-types',
        'transform-react-constant-elements',
        'transform-react-inline-elements',
      ],
    },
    include: path.join(__dirname, '..', 'src'),
    exclude: path.join(__dirname, '..', 'node_modules'),
  },
  { test: /\.json$/, loader: 'json-loader' },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ico)$/,
    loader: 'url',
    query: {
      name: '[hash].[ext]',
      limit: 10000,
    },
  },
  { test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
  },
  {
    test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  },
];

const postCSSConfig = postCssPlugins;

module.exports = [
  {
    name: 'browser',
    devtool: 'source-map',
    context: path.join(__dirname, '..', 'src'),
    entry: {
      app: './client',
    },
    output: {
      path: assetsPath,
      filename: '[name].js',
      publicPath,
    },
    module: {
      loaders: commonLoaders,
    },
    resolve: {
      root: [path.join(__dirname, '..', 'src')],
      extensions: ['', '.js', '.jsx', '.css'],
    },
    plugins: [
      // extract inline css from modules into separate files
      new ExtractTextPlugin('styles/app.css'),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
      new webpack.DefinePlugin({
        __DEVCLIENT__: false,
        __DEVSERVER__: false,
      }),
      new InlineEnvironmentVariablesPlugin({ NODE_ENV: 'production' }),
    ],
    postcss: postCSSConfig,
  }, {
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
      publicPath,
      libraryTarget: 'commonjs2',
    },
    module: {
      loaders: commonLoaders,
    },
    resolve: {
      root: [path.join(__dirname, '..', 'src')],
      extensions: ['', '.js', '.jsx', '.css'],
    },
    plugins: [
      // Order the modules and chunks by occurrence.
      // This saves space, because often referenced modules
      // and chunks get smaller ids.
      new webpack.optimize.OccurenceOrderPlugin(),
      new ExtractTextPlugin('styles/app.css'),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
      new webpack.DefinePlugin({
        __DEVCLIENT__: false,
        __DEVSERVER__: false,
      }),
      new InlineEnvironmentVariablesPlugin({ NODE_ENV: 'production' }),
    ],
    postcss: postCSSConfig,
  },
];
