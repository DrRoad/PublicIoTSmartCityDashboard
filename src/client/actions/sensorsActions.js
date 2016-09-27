import axios from "axios";

import serverConfig from "./../config/server";

export function fetchSensors() {
  return function(dispatch) {
    dispatch({type: "FETCH_SENSORS_PENDING"});
    axios.get(location.origin + serverConfig.uData + "sensors.json")
      .then((response) => {
        dispatch({type: "FETCH_SENSORS_FULFILLED", payload: {sensors: response.data}});
      })
      .catch((error) => {
        dispatch({type: "FETCH_SENSORS_REJECTED", payload: error});
      })
  }
}
