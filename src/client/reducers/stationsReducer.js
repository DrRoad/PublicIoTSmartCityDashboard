export default function reducer(state={
  fetching: false,
  fetched: false,
  error: null,
  stations: [],
}, action) {
  switch (action.type) {
    case "FETCH_STATIONS_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_STATIONS_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_STATIONS_FULFILLED" : {
      return {...state, fetching: false, fetched: true, stations: action.payload.data}
    }
  }
  return state;
};
