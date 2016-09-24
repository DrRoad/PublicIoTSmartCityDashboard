import { combineReducers } from "redux";

import tweets from "./tweetsReducer";
import user from "./userReducer";
import localization from "./localizationReducer";

export default combineReducers({
  user,
  tweets,
  localization,
});
