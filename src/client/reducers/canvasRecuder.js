export default function reducer(state={
  fetching: false,
  fetched: false,
  error: null,
  mouse: {
    x: 0, y: 0
  }
}, action) {
  switch (action.type) {
    case "SET_MOUSE_POSITION": {
      return {...state, mouse: action.payload}
    }
  }
  return state;
};
