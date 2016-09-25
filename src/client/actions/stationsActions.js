import axios from "axios";

import serverConfig from "./../config/server";

export function fetchStations() {
  return {
    type: "FETCH_STATIONS",
    payload: axios.get(location.origin + serverConfig.uData + "stations.json"),
  }
}
