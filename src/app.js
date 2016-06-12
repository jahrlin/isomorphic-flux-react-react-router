import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import RootLayout from 'containers/RootLayout/RootLayout'
import Home from 'containers/Home/Home'
import Subroute from 'containers/Subroute/Subroute'
import Parameterized from 'containers/Parameterized/Parameterized'

const mountNode = document.querySelector('#root');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={RootLayout}>
            <IndexRoute component={Home} />
            <Route path="subroute/" component={Subroute} />
            <Route path="parameterized/:param" component={Parameterized} />
        </Route>
    </Router>, mountNode
);
