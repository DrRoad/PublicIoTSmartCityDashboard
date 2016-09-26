export default function reducer(state={
  fetching: false,
  fetched: false,
  error: null,
  stations: [],
  station: null,
}, action) {
  switch (action.type) {
    case "GET_STATIONS": {
      return {...state, query: action.payload.query}
    }
    case "FETCH_STATIONS_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_STATIONS_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_STATIONS_FULFILLED" : {
      let stations;
      if (action.payload.query != null && action.payload.query.trim() != "") {
        stations = action.payload.stations.filter(includes.bind(null, action.payload.query.trim().toLowerCase()));
      } else {
        stations = action.payload.stations;
      }
      // console.log(action);
      // const stations = action.payload.filter(includes.bind(this, state.query));
      // console.log(stations);
      return {...state, fetching: false, fetched: true, stations: stations};
    }
    case "SELECT_STATION": {
      return {...state, station: action.payload}
    }
  }
  return state;
};

// function includes(wordToCompare) {
//   return function(element) {
//     return element.includes(wordToCompare);
//   }
// }

function includes(query, value, index, array) {
  return value.name.toLowerCase().includes(query) || value.address.toLowerCase().includes(query);
}
