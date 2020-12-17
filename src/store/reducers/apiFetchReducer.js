import {
  DATA_FETCH_START,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_FAIL,
  DATA_POST_START,
  DATA_POST_SUCCESS,
  DATA_POST_FAIL,
} from "../actionTypes";

import { updateObject } from "../../components/helpers/utility.js";

const fetchStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const fetchSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
  });
};
const fetchFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload,
  });
};
const postStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};
const postSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
  });
};
const postFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload,
  });
};

function apiFetchReducer(state = {}, action) {
  switch (action.type) {
    case DATA_FETCH_START:
      return fetchStart(state, action);
    case DATA_FETCH_SUCCESS:
      return fetchSuccess(state, action);
    case DATA_FETCH_FAIL:
      return fetchFail(state, action);
    case DATA_POST_START:
      return postStart(state, action);
    case DATA_POST_SUCCESS:
      return postSuccess(state, action);
    case DATA_POST_FAIL:
      return postFail(state, action);
    default:
      return state;
  }
}

export { apiFetchReducer };
