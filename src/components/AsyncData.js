import React, { Component } from 'react';

class AsyncData extends Component {
  render() {
    return (
      <div>
        <h2>This is the AsyncData component.</h2>
        <div>
          <h3>
            User ID {this.props.data.asyncdata.user.id},&nbsp;
              <a href={this.props.data.asyncdata.user.url}>
                {this.props.data.asyncdata.user.name}
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
}

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
  data: React.PropTypes.shape({
    asyncdata: React.PropTypes.shape({
      user: React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        url: React.PropTypes.string
      })
    })
  })
}

export default AsyncData;
