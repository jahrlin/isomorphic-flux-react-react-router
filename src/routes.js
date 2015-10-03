import App from './components/App.js';
import Home from './components/Home.js';
import Parameters from './components/Parameters.js';
import Subroute from './components/Subroute.js';
import AsyncData from './components/AsyncData';
import React from 'react';
import { Route, DefaultRoute } from 'react-router';

const routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route path="subroute/" handler={Subroute} />
    <Route path="parameters/:id/" handler={Parameters} />
    <Route name="asyncdata" path="asyncdata/" handler={AsyncData} />
  </Route>
);

export default routes;
