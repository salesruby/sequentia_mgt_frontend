import * as actionTypes from "../actionTypes";
import axios from "axios";

export const fetchStart = () => {
  return {
    type: actionTypes.DATA_FETCH_START,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: actionTypes.DATA_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchFail = (error) => {
  return {
    type: actionTypes.DATA_FETCH_FAIL,
    payload: error,
  };
};

export const postStart = () => {
  return {
    type: actionTypes.DATA_POST_START,
  };
};

export const postSuccess = (data) => {
  return {
    type: actionTypes.DATA_POST_SUCCESS,
    payload: data,
  };
};

export const postFail = (error) => {
  return {
    type: actionTypes.DATA_POST_FAIL,
    payload: error,
  };
};

const configureHeaders = (token) => {
  if (token) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  }
};

// GET REQUESTS
export const fetchData = (
  endpoint,
  token,
  dispatchActions,
  successCallback
) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    await axios
      .get(endpoint, configureHeaders(token))
      .then((res) => {
        const data = res.data;
        dispatch(fetchSuccess(data));
        dispatch(dispatchActions(data));
      })
      .then(() => {
        if (successCallback) {
          successCallback();
        }
      })
      .catch((err) => {
        dispatch(fetchFail(err.response.data));
      });
  };
};

// POST REQUESTS
export const postData = (endpoint, token, dispatchActions, successCallback) => {
  return async (dispatch) => {
    dispatch(postStart());
    await axios
      .post(endpoint, configureHeaders(token))
      .then((res) => {
        const data = res.data;
        dispatch(postSuccess(data));
        dispatchActions(data);
      })
      .then(() => {
        successCallback();
      })
      .catch((err) => {
        dispatch(postFail(err.response.data));
      });
  };
};
