import { combineReducers } from "redux";

import tweets from "./tweetsReducer";
import user from "./userReducer";

import localization from "./localizationReducer";
import stations from "./stationsReducer";
import sensors from "./sensorsReducer";
import canvas from "./canvasRecuder";
import record from "./recordRecuder";

export default combineReducers({
  user,
  tweets,

  localization,
  stations,
  sensors,
  canvas,
  record,
});
