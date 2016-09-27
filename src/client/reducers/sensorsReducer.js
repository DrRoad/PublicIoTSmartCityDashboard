export default function reducer(state={
  fetching: false,
  fetched: false,
  error: null,
  sensors: [],
}, action) {
  switch (action.type) {
    case "GET_SENSORS": {
      return {...state, query: action.payload.query}
    }
    case "FETCH_SENSORS_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_SENSORS_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_SENSORS_FULFILLED" : {
      let sensors = action.payload.sensors;
      return {...state, fetching: false, fetched: true, sensors: sensors};
    }
  }
  return state;
};
