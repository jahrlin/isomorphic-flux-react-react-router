import ObjectActions from '../actions/ObjectActions';
import ObjectStore from '../stores/ObjectStore';
import React, { Component } from 'react';

class Parameters extends Component {
  constructor(props) {
    super(props);
    this.state = ObjectStore.getObject(this.props.params.id);
  }

  handleChange(event) {
    var object = this.state;
    object.description = event.target.value;

    this.setState(object);
  }

  save() {
    ObjectActions.updateDescription(this.state.id, this.state.description);
  }

  render() {
    return (
      <div>
        <h2>This is the Parameters component.</h2>
        <p>
          Parameter value is {this.props.params.id}.
        </p>
        <p>
          Object description:
        </p>
        <p>
          <textarea value={this.state.description} onChange={this.handleChange.bind(this)} />
          <button onClick={this.save.bind(this)}>
            Save
          </button>
        </p>
      </div>
    );
  }
}

Parameters.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string
  })
}

export default Parameters;
