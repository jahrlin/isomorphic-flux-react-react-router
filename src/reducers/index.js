import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import data from 'reducers/data'

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  data,
  routing
});

export default rootReducer;
