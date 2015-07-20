import React from 'react';
import Router from 'react-router';
import routes from './routes.js';

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.getElementById('app'));
});
