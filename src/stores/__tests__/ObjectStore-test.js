jest.dontMock('../../constants/ObjectConstants');
jest.dontMock('../ObjectStore');
jest.dontMock('object-assign');
jest.dontMock('keyMirror');

describe('ObjectStore', () => {
  var ObjectConstants = require('../../constants/ObjectConstants');
  var Dispatcher;
  var ObjectStore;
  var callback;

  // mock actions
  var actionObjectUpdateDescription = {
    actionType: ObjectConstants.OBJECT_UPDATE_DESCRIPTION,
    id: 'replace me in test',
    description: 'replace me in test'
  };

  beforeEach(() => {
    Dispatcher = require('../../dispatcher/dispatcher');
    ObjectStore = require('../ObjectStore');
    callback = Dispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', () => {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with 20 objects', () => {
    var all = ObjectStore.getAll();
    expect(Object.keys(all).length).toEqual(20);
  });

  it('should update an objects description', () => {
    actionObjectUpdateDescription.id = 15;
    actionObjectUpdateDescription.description = 'new description';

    callback(actionObjectUpdateDescription);

    var object = ObjectStore.getObject(15);
    expect(object.description).toEqual('new description');
  });
});
