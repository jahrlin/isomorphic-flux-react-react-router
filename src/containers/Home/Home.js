import React, { PropTypes } from 'react';
import {Link} from 'react-router'

class Home extends React.Component {
  render() {
    return (
        <div className="home">
        <h1>Home</h1>
        <ul>
        <li>
          <Link to="subroute/">A subroute</Link>
        </li>
        <li>
          <Link to="parameterized/value/">A parameterized route</Link>
        </li>
        </ul>
        </div>
        )
  }
}

export default Home
