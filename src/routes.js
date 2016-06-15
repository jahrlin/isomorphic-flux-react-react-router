import React from 'react'

import {browserHistory, Router, Route, IndexRoute} from 'react-router'

import RootLayout from './containers/RootLayout/RootLayout'
import Home from './containers/Home/Home'
import Subroute from './containers/Subroute/Subroute'
import Parameterized from './containers/Parameterized/Parameterized'
//import AsyncData from './containers/AsyncData/AsyncData'

export default () => {
  return (
      <Route path="/" component={RootLayout}>
      <IndexRoute component={Home} />
      <Route path="subroute/" component={Subroute} />
      <Route path="parameterized/:param" component={Parameterized} />
      </Route>
      );
};
