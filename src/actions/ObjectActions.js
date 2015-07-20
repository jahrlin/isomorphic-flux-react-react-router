import Dispatcher from '../dispatcher/dispatcher';
import ObjectConstants from '../constants/ObjectConstants';

var ObjectActions = {
  updateDescription: function(id, description) {
    Dispatcher.dispatch({
      actionType: ObjectConstants.OBJECT_UPDATE_DESCRIPTION,
      id: id,
      description: description
    });
  }
};

module.exports = ObjectActions;
