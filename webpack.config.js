const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
const getConfig = require('hjs-webpack');

const root = resolve(__dirname)
const src = join(root, 'src')

var config = getConfig({
  isDev: isDev,
  in: join(__dirname, 'src/app.js'),
  out: join(__dirname, 'dist'),
  clearBeforeBuild: true
});

config.resolve.alias = {
  'containers': join(src, 'containers'),
  'components': join(src, 'components'),
  'utils': join(src, 'utils')
}

module.exports = config;
