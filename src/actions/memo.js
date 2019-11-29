import axios from "../axios";
import {
  FETCH_MEMO,
  ADD_LABEL,
  ADD_MEMO_TO_LABEL,
  DELTE_MEMO_FROM_LABEL,
  UPDATE_MEMO,
  UPDATE_MEMO_FROM_LABEL,
  FETCH_LABELS
} from "../contants/actionTypes";
import { fetchLabels } from "./label";

export const fetchMemo = id => async dispatch => {
  try {
    const { data } = await axios.get(`/memos/${id}`);

    dispatch({
      type: FETCH_MEMO,
      payload: data
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const postMemo = (memo, label) => dispatch => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await axios.post(`/memos`, memo);
      const memoId = result.data._id;
      result = await axios.post(`/labels/${label}/memos`, {
        ...memo,
        memoIds: [memoId]
      });

      dispatch({
        type: ADD_MEMO_TO_LABEL,
        id: label,
        memo: {
          ...memo,
          _id: memoId,
          updatedAt: result.data.updatedAt,
          createdAt: result.data.createdAt
        }
      });

      resolve(memoId);
    } catch (err) {
      console.log(err.message);
    }
  });
};

export const updateMemo = memo => async dispatch => {
  try {
    let { data } = await axios.put(`/memos/${memo.id}`, {
      title: memo.title,
      content: memo.content
    });

    dispatch({
      type: UPDATE_MEMO,
      payload: data
    });
  } catch (err) {}
};

export const deleteMemo = (label, memos) => async dispatch => {
  try {
    let result = await axios.delete(`/labels/${label}/memos`, {
      data: {
        memoIds: memos
      }
    });

    dispatch({
      type: DELTE_MEMO_FROM_LABEL,
      id: label,
      memos
    });
  } catch (err) {
    console.log(err.message);
  }
};
