import React from 'react'

import {browserHistory, Router, Route, IndexRoute} from 'react-router'

import RootLayout from 'containers/RootLayout/RootLayout'
import Home from 'containers/Home/Home'
import Subroute from 'containers/Subroute/Subroute'
import Parameterized from 'containers/Parameterized/Parameterized'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={RootLayout}>
      <IndexRoute component={Home} />
      <Route path="subroute/" component={Subroute} />
      <Route path="parameterized/:param" component={Parameterized} />
    </Route>
  </Router>
);
