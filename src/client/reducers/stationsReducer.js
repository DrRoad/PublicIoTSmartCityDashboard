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
    case "FETCH_STATIONS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_STATIONS_FULFILLED": {
      let stations;
      if (action.payload.query != null && action.payload.query.trim() != "") {
        stations = action.payload.stations.filter(includes.bind(null, action.payload.query.trim().toLowerCase()));
      } else {
        stations = action.payload.stations;
      }
      let station = state.station;
      if (station == null && stations.length > 0) {
        station = stations[0];
      }
      return {...state, fetching: false, fetched: true, station: station, stations: stations};
    }
    case "SELECT_STATION": {
      return {...state, station: action.payload};
    }
    case "REMOVE_SENSOR_FROM_STATION": {
      let sensors = state.station.sensors.filter(function(value) {
        return value != action.payload;
      });
      let station = {...state.station, sensors: sensors};
      return {...state, station: station};
    }
    case "ADD_SENSOR_TO_STATION": {
      let sensors = [...state.station.sensors];
      if (!sensors.includes(action.payload)) {
        sensors.push(action.payload);
      }
      let station = {...state.station, sensors: sensors};
      return {...state, station: station};
    }

    case "UPDATE_ACTIVE_SENSORS": {
      if (action.payload.s1 != null) {
        state.stations.forEach((station) => {
          if (station.id == 1) {
            let sensors = [];
            if (action.payload.s1.p1 && action.payload.s1.p1 == "CLOSED") {
              sensors.push(1);
            }
            if (action.payload.s1.p2 && action.payload.s1.p2 == "CLOSED") {
              sensors.push(2);
            }
            station.sensors = sensors;

            if (state.station.id == station.id) {
              state.station = {...station};
            }
          }
        });
      }
      return {...state};
    }
  }
  return state;
};

function includes(query, value, index, array) {
  return value.name.toLowerCase().includes(query) || value.address.toLowerCase().includes(query);
}
