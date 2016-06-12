import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'

const mountNode = document.querySelector('#root');
ReactDOM.render(
    Routes, mountNode
);
