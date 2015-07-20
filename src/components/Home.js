import { Link } from 'react-router';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          This is the 'Home' component.
        </h2>
        <p>
          This is also the default route set for our container.
          <ul>
            <li>
              <Link to="/subroute/">This is a link to a subroute</Link>
            </li>
            <li>
              <Link to="/parameters/15/">This is a parameterized route</Link>
            </li>
          </ul>
        </p>
      </div>
    );
  }
}

export default Home;
