import React, { Component } from 'react';
var resolveHash = require('when/keys').all;

var AsyncData = React.createClass({

  getInitialState() {
    var self = this;

    // AsyncData.fetchData().then(data => {
    //   return {user: data.user};
    // });
    return {};
  },

  render() {
    return (
      <div>
        <h2>This is the AsyncData component.</h2>
        <div>
          <h3>
            User ID {this.state.user.id},&nbsp;
              <a href={this.state.user.url}>
                {this.state.user.name}
              </a>
          </h3>
        </div>
        <code>
          <pre>
          </pre>
        </code>
      </div>
    );
  }
});

AsyncData.fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          name: 'jahrlin',
          url: 'https://github.com/jahrlin'
        }
      });
    }, 200);
  });
}

AsyncData.propTypes = {
  route: React.PropTypes.shape({
    data: React.PropTypes.shape({
      asyncdata: React.PropTypes.shape({
        user: React.PropTypes.shape({
          id: React.PropTypes.number,
          name: React.PropTypes.string,
          url: React.PropTypes.string
        })
      })
    })
  })
}

export default AsyncData;
