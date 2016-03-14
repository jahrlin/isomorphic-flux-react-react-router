import React from 'react';
import { Router, match, RouterContext } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes.js';
import * as history from 'history';
var resolveHash = require('when/keys').all;

// match({routes, location: '/'}, (error, redirectLocation, renderProps) => {
//   var promises = renderProps.routes[1].childRoutes.filter(function (route) {
//     console.log(renderProps.routes);
//     // gather up the handlers that have a static `fetchData` method
//     return route.handler.fetchData;
//   }).reduce(function (promises, route) {
//     // reduce to a hash of `key:promise`
//     promises[route.name] = route.handler.fetchData(renderProps.params);
//     return promises;
//   }, {});

//   resolveHash(promises).then(function (data) {
//     ReactDOM.render(<RouterContext {...renderProps} />, document.getElementById('app'));
//     //React.render(<Root data={data}/>, document.getElementById('app'));
//   });
// });

ReactDOM.render((routes), document.getElementById('app'));
