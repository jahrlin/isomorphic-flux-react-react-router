import React, { PropTypes } from 'react';
import { Router, Link } from 'react-router';
import styles from 'styles/app'

class RootLayout extends React.Component {
  render() {
    return (
        <div className="app">
        <header>
        <div className="lead">
        <Link to="/">Root</Link>
        </div>
        </header>
        <main>
        {this.props.children}
        </main></div>
        )
  }
}

export default RootLayout
