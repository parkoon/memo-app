import { FETCH_LABELS, ADD_LABEL } from "../contants/actionTypes";

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LABELS: {
      return action.payload;
    }

    case ADD_LABEL: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}
