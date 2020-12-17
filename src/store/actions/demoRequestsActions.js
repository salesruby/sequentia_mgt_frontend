import * as actionTypes from "../actionTypes";
import { fetchData } from "./apiFetchActions";

export const getDemoRequests = (data) => {
  return {
    type: actionTypes.GET_DEMO_REQUESTS,
    payload: data,
  };
};

export const fetchDemoRequests = (token, successCallback) => {
  return (dispatch) => {
    dispatch(
      fetchData(
        "http://127.0.0.1:8000/api/demo/request",
        token,
        getDemoRequests,
        successCallback
      )
    );
  };
};
