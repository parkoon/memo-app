import { FETCH_MEMO, UPDATE_MEMO } from "../contants/actionTypes";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MEMO:
    case UPDATE_MEMO:
      return action.payload;

    default:
      return state;
  }
}
