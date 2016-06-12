import React from 'react';

class Parameterized extends React.Component {
  render() {
    return (
        <div className="parameterized">
        <p>
          This is a parameterized route.
        </p>
        <p>
          The parameter is {this.props.params.param}
        </p>
        </div>
        )
  }
}

export default Parameterized
