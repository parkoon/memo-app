import {
  FETCH_LABELS,
  ADD_LABEL,
  ADD_MEMO_TO_LABEL,
  DELTE_MEMO_FROM_LABEL,
  DELETE_LABEL
} from "../contants/actionTypes";

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LABELS: {
      return action.payload;
    }

    case DELTE_MEMO_FROM_LABEL: {
      const index = state.findIndex(s => s._id === action.id);
      const newMemo = {
        ...state[index],
        memos: state[index].memos.filter(
          m => action.memos.indexOf(m._id) === -1
        )
      };

      return [
        ...state.slice(0, index),
        newMemo,
        ...state.slice(index + 1, state.length)
      ];
    }

    case DELETE_LABEL:
      return state.filter(s => s._id !== action.id);

    case ADD_MEMO_TO_LABEL: {
      const index = state.findIndex(s => s._id === action.id);

      const newMemo = {
        ...state[index],
        memos: [...state[index].memos, action.memo]
      };
      return [
        ...state.slice(0, index),
        newMemo,
        ...state.slice(index + 1, state.length)
      ];
    }

    case ADD_LABEL: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}
