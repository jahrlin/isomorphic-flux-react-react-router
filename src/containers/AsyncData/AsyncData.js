import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import * as AsyncDataActions from '../../actions/AsyncData';

class AsyncData extends Component {
  constructor(props) {
    super(props);
  }

  static need = [
    AsyncDataActions.getData
  ]

  render() {
    return (
      <div className="asyncdata">
        <h2>This data is fetched asynchronously</h2>
        <pre>
          author: {this.props.data.author},
          github: {this.props.data.github}
        </pre>
      </div>
    )
  }
}

AsyncData.propTypes = {
  data: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  let { author, github } = state.data;

  return {
    data: {
      author: author,
      github: github
    }
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AsyncDataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncData);

