import express from 'express';
import path from 'path';
import React from 'react';
import Router from 'react-router';
import routes from './routes.js';

const server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'jade');
server.set('views', __dirname + '/views')

server.use((req, res, next) => {
  var router = Router.create({location: req.url, routes: routes});

  router.run((Handler, state) => {
    var html = React.renderToString(<Handler/>)
    return res.render('base', {html: html, state: state})
  });
});

server.listen(server.get('port'), () => {
  process.send('online');
});
