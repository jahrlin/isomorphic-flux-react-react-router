// from https://github.com/choonkending/react-webpack-node/blob/master/webpack/webpack.config.dev-client.js

var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, '..', 'dist', 'assets');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    query: {
      "presets": ["react-hmre", "es2015", "react", "stage-0"],
      "plugins": ["transform-decorators-legacy", "transform-object-assign"]
    },
    include: path.join(__dirname, '..', 'src'),
    exclude: path.join(__dirname, '..', 'node_modules')
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ico)$/,
    loader: 'url',
    query: {
        name: '[hash].[ext]',
        limit: 10000,
    }
  },
  { test: /\.html$/, loader: 'html-loader' }
];

var postCSSConfig = function() {
  return [
    require('postcss-import')({
      path: path.join(__dirname, '..', 'src', 'styles'),
      // addDependencyTo is used for hot-reloading in webpack
      addDependencyTo: webpack
    }),
    require('postcss-cssnext')(),
    require('postcss-simple-vars')(),
    require('postcss-nested')(),
    require('postcss-reporter')({
      clearMessages: true
    })
  ];
};

module.exports = {
    // eval - Each module is executed with eval and //@ sourceURL.
    devtool: 'eval',
    // The configuration for the client
    name: 'browser',
    /* The entry point of the bundle
     * Entry points for multi page app could be more complex
     * A good example of entry points would be:
     * entry: {
     *   pageA: "./pageA",
     *   pageB: "./pageB",
     *   pageC: "./pageC",
     *   adminPageA: "./adminPageA",
     *   adminPageB: "./adminPageB",
     *   adminPageC: "./adminPageC"
     * }
     *
     * We can then proceed to optimize what are the common chunks
     * plugins: [
     *  new CommonsChunkPlugin("admin-commons.js", ["adminPageA", "adminPageB"]),
     *  new CommonsChunkPlugin("common.js", ["pageA", "pageB", "admin-commons.js"], 2),
     *  new CommonsChunkPlugin("c-commons.js", ["pageC", "adminPageC"]);
     * ]
     */
    context: path.join(__dirname, '..', 'src'),
    // Multiple entry with hot loader
    // https://github.com/glenjamin/webpack-hot-middleware/blob/master/example/webpack.config.multientry.js
    entry: {
      app: ['./client', hotMiddlewareScript]
    },
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: '[name].js',
      // The output path from the view of the Javascript
      publicPath: '/assets/'
    },
    module: {
      loaders: commonLoaders.concat([
        { test: /\.css$/,
          loader: 'style!css!postcss-loader'
        }
      ])
    },
    resolve: {
      root: [path.join(__dirname, '..', 'src')],
      extensions: ['', '.js', '.jsx', '.css'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          __DEVCLIENT__: true,
          __DEVSERVER__: false
        })
    ],
    postcss: postCSSConfig
};
