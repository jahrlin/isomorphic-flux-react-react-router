import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import 'font-awesome/css/font-awesome.css';
import 'styles/app';

class RootLayout extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

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
    );
  }

}

export default RootLayout;
