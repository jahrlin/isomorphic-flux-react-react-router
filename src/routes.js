import App from './components/App.js';
import Home from './components/Home.js';
import Parameters from './components/Parameters.js';
import Subroute from './components/Subroute.js';
import AsyncData from './components/AsyncData';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="subroute/" component={Subroute} />
      <Route path="parameters/:id/" component={Parameters} />
      <Route name="asyncdata" path="asyncdata/" component={AsyncData} />
    </Route>
  </Router>
);

export default routes;
