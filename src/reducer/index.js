import { combineReducers } from "redux";

// Reducers
import labelReducer from "./label";

const rootReducer = combineReducers({
  labels: labelReducer
});

export default rootReducer;
