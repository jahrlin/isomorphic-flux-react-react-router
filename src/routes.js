import React from 'react';

import { Route, IndexRoute } from 'react-router';

import RootLayout from './containers/RootLayout/RootLayout';
import Home from './containers/Home/Home';
import Subroute from './containers/Subroute/Subroute';
import Parameters from './containers/Parameters/Parameters';
import AsyncData from './containers/AsyncData/AsyncData';

export default (store) => {
  return (
    <Route path="/" component={RootLayout}>
      <IndexRoute component={Home} />
      <Route path="subroute/" component={Subroute} />
      <Route path="parameters/:param" component={Parameters} />
      <Route path="asyncdata/" component={AsyncData} />
    </Route>
  );
};
