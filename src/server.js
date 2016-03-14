import express from 'express';
import path from 'path';
import React from 'react';
import { Router, match, RouterContext } from 'react-router';
import routes from './routes.js';
import ReactDOMServer from 'react-dom/server';
var resolveHash = require('when/keys').all;

const server = express();

server.set('port', (process.env.PORT || 3000));
server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'jade');
server.set('views', __dirname + '/views');

server.use((req, res, next) => {

  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var promises = renderProps.routes.filter((route) => {
        if (!route.component)
          return null;

        return route.component.fetchData;
      });


      if (promises.length !== 0) {
        promises = promises.reduce((promises2, route) => {
          if (route.component) {
            promises2[route.name] = route.component.fetchData();
          }

          return promises2;
        }, {});
      }

      resolveHash(promises).then((data) => {
        renderProps.routes[renderProps.routes.length - 1].data = data;
        var html = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
        return res.render('base', {html: html, state: renderProps});
      });

    } else {
      res.status(404).send('Not found')
    }
  });

  // var router = Router.create({location: req.url, routes: routes});

  // router.run((Handler, state) => {
  //   var promises = state.routes.filter(function (route) {
  //     // gather up the handlers that have a static `fetchData` method
  //     return route.handler.fetchData;
  //   }).reduce(function (promises, route) {
  //     // reduce to a hash of `key:promise`
  //     promises[route.name] = route.handler.fetchData(state.params);
  //     return promises;
  //   }, {});

  //   resolveHash(promises).then(function (data) {
  //     var html = React.renderToString(<Handler data={data} />)
  //     return res.render('base', {html: html, state: state})
  //   });

  // });
});

server.listen(server.get('port'), () => {
  process.send('online');
});
