import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h2>This is the &lt;Home&gt; component</h2>
        <ul className="links">
          <li className="links__item">
            <i className="fa fa-check" aria-hidden="true"></i>
            <Link to="subroute/">A subroute</Link>
          </li>
          <li className="links__item">
            <i className="fa fa-check" aria-hidden="true"></i>
            <Link to="parameters/value/">Parameters</Link>
          </li>
          <li className="links__item">
            <i className="fa fa-check" aria-hidden="true"></i>
            <Link to="asyncdata/">A route that fetches data asynchronuously</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
