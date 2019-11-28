import { FETCH_TRENDING } from "../contants/actionTypes";
import axios from "axios";

// export const fetchTrendData = data => {
//   return {
//     type: FETCH_TRENDING,
//     data
//   };
// };
// export const fetchTrending = () => {
//   return dispatch => {
//     return axios
//       .get(`http://dummy.restapiexample.com/api/v1/employees`)
//       .then(response => {
//         dispatch(fetchTrendData(response.data));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };
