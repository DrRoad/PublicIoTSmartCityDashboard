import moment from 'moment';

import serverConfig from "./../config/server";


export default function reducer(state={
  fetching: false,
  fetched: false,
  error: null,
  updated: new moment(),
  record: [],
}, action) {
  switch (action.type) {
    case "FETCH_RECORD_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_RECORD_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_RECORD_FULFILLED" : {
      let record = action.payload.record.map((item) => {
        let date = moment(item.x, serverConfig.sServerDateFormat);
        return {x: date, y: item.y};
      });
      return {...state, fetching: false, fetched: true, updated: moment(action.payload.updated, serverConfig.sServerDateFormat), record: record};
    }
  }
  return state;
};
