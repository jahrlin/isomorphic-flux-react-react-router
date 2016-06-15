import React, { PropTypes } from 'react';
import { Router, Link } from 'react-router';
import styles from 'styles/app'

class RootLayout extends React.Component {
  render() {
    return (
        <div className="app">
          <header>
            <div className="lead">
              <h1>
                <Link to="/">Isomorphic React/Redux App</Link>
              </h1>
            </div>
          </header>
          <main>
            <div className="inner">
              {this.props.children}
            </div>
          </main>
        </div>
        )
  }
}

export default RootLayout
