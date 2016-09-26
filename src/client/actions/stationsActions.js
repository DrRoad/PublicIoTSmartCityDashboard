import axios from "axios";

import serverConfig from "./../config/server";

export function fetchStations(query) {
  return function(dispatch) {
    dispatch({type: "FETCH_STATIONS_PENDING"});
    axios.get(location.origin + serverConfig.uData + "stations.json")
      .then((response) => {
        dispatch({type: "FETCH_STATIONS_FULFILLED", payload: {stations: response.data, query: query}});
      })
      .catch((error) => {
        dispatch({type: "FETCH_STATIONS_REJECTED", payload: error});
      })
  }
  // return {
  //   type: "GET_STATIONS",
  //   payload: {ajax: axios.get(location.origin + serverConfig.uData + "stations.json"), query: query},
  // }
}
//
// export function fetchStations() {
//   return {
//     type: "FETCH_STATIONS",
//     payload: ajax: axios.get(location.origin + serverConfig.uData + "stations.json"),
//   }
// }
