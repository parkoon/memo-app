import { combineReducers } from "redux";

// Reducers
import labelReducer from "./label";
import memoReducer from "./memo";

const rootReducer = combineReducers({
  labels: labelReducer,
  memo: memoReducer
});

export default rootReducer;
