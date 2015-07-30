import React from 'react';
import Router from 'react-router';
import routes from './routes.js';
var resolveHash = require('when/keys').all;

Router.run(routes, Router.HistoryLocation, (Root, state) => {
  var promises = state.routes.filter(function (route) {
    // gather up the handlers that have a static `fetchData` method
    return route.handler.fetchData;
  }).reduce(function (promises, route) {
    // reduce to a hash of `key:promise`
    promises[route.name] = route.handler.fetchData(state.params);
    return promises;
  }, {});

  resolveHash(promises).then(function (data) {
    React.render(<Root data={data}/>, document.getElementById('app'));
  });
});
