import Dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';
import ObjectConstants from '../constants/ObjectConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

//populate our private list of objects with some dummy data
var _objects = {};
for (var i = 20; i >= 1; i--) {
  _objects[i] = {
    id: i,
    description: 'object #' + i
  };
}

function read(id) {
  return _objects[id];
}

function update(id, description) {
  _objects[id] = assign({}, _objects[id], description);
}

var ObjectStore = assign({}, EventEmitter.prototype, {
  getObject: function(id) {
    return read(id);
  },

  getAll: function() {
    return _objects;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(function(action) {
  var description;

  switch(action.actionType) {
  case ObjectConstants.OBJECT_UPDATE_DESCRIPTION:
    description = action.description.trim();
    if (description !== '') {
      update(action.id, {description: description});
      ObjectStore.emitChange();
    }
    break;
  default:
    // no op
  }
});

module.exports = ObjectStore;
