import axios from "axios";

import serverConfig from "./../config/server";

export function fetchRecord() {
  return function(dispatch) {
    dispatch({type: "FETCH_RECORD_PENDING"});
    axios.get(location.origin + serverConfig.uData + "record.json")
      .then((response) => {
        dispatch({type: "FETCH_RECORD_FULFILLED", payload: {record: response.data.data, updated: response.data.updated}});
      })
      .catch((error) => {
        dispatch({type: "FETCH_RECORD_REJECTED", payload: error});
      })
  }
}
