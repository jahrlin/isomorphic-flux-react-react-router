import React, { PropTypes } from 'react';
import {Link} from 'react-router'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h2>This is the &lt;Home&gt; component</h2>
          <ul className="links">
            <li className="links__item">
              <Link to="subroute/">A subroute</Link>
            </li>
            <li className="links__item">
              <Link to="parameterized/value/">A parameterized route</Link>
            </li>
            <li className="links__item">
              <Link to="asyncdata/">A route that fetches data asynchronuously</Link>
            </li>
          </ul>
       </div>
    )
  }
}

export default Home
