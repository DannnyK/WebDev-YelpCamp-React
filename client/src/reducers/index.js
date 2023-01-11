import { combineReducers } from "redux";

import campgroundsReducers from "./campgroundsReducers";
import reviewsReducers from "./reviewsReducers";

export default combineReducers({ campgroundsReducers, reviewsReducers });
