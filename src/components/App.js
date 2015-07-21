import React, { Component } from 'react';
import Router, { RouteHandler, Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="asd2">
        <header>
          <div className="lead">
            <h1>
              <Link to="/">
                Isomorphic Flux/React App
              </Link>
            </h1>
            <h2>
              by <a href="https://github.com/jahrlin">@jahrlin</a> - <a href="https://github.com/jahrlin/isomorphic-flux-react-react-router">source</a>
            </h2>
          </div>
        </header>
        <div className="main" role="main">
          <RouteHandler/>
        </div>
      </div>
    );
  }
}

export default App;
