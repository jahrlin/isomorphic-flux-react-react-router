import express from 'express';
import path from 'path';
import React from 'react';
import Router from 'react-router';
import routes from './routes.js';
var resolveHash = require('when/keys').all;

const server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'jade');
server.set('views', __dirname + '/views')

server.use((req, res, next) => {
  var router = Router.create({location: req.url, routes: routes});

  router.run((Handler, state) => {
    var promises = state.routes.filter(function (route) {
      // gather up the handlers that have a static `fetchData` method
      return route.handler.fetchData;
    }).reduce(function (promises, route) {
      // reduce to a hash of `key:promise`
      promises[route.name] = route.handler.fetchData(state.params);
      return promises;
    }, {});

    resolveHash(promises).then(function (data) {
      var html = React.renderToString(<Handler data={data} />)
      return res.render('base', {html: html, state: state})
    });

  });
});

server.listen(server.get('port'), () => {
  process.send('online');
});
