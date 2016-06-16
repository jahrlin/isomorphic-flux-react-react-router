export default function data(state = {
  author: 'unknown',
  github: 'unknown'
}, action) {
  switch (action.type) {
    case 'GET_ASYNCDATA_SUCCESS':
      return Object.assign({}, state, {
        author: action.res.author,
        github: action.res.github
      });
    default:
      return state;
  }
}

