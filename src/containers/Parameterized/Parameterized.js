import React from 'react';

class Parameterized extends React.Component {
  render() {
    return (
        <div className="parameterized">
        <h2>
          This is a route with a parameter, param is <span>{this.props.params.param}</span>
        </h2>
        </div>
        )
  }
}

export default Parameterized
