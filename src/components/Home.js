import { Link } from 'react-router';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          This is the 'Home' component.
        </h2>
        <div>
          <p>
            This is also the default route set for our container.
          </p>
          <ul>
            <li>
              <Link to="/subroute/">This is a link to a subroute</Link>
            </li>
            <li>
              <Link to="/parameters/15/">This is a parameterized route</Link>
            </li>
            <li>
              <Link to="/asyncdata/">This is a route that renders after an async operation</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
