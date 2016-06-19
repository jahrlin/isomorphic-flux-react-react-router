import React from 'react';

class Parameters extends React.Component {
  render() {
    return (
      <div className="parameters">
        <h2>
          This is a route with a parameter, param is <span>{this.props.params.param}</span>
        </h2>
        <h3>Used parameters:</h3>

      </div>
    );
  }
}

export default Parameters;
