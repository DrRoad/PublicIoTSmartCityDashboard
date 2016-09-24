export default function reducer(state={
  fetching: false,
  fetched: false,
  error: null,
  user: {
    id: null,
    name: null,
    age: null
  },
}, action) {
  switch (action.type) {
    case "FETCH_USER": {
      return {...state, fetching: true}
    }
    case "FETCH_USER_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_USER_FULLFILLED" : {
      return {...state, fetching: false, fetched: true, user: action.payload}
    }
  }
  return state;
};
