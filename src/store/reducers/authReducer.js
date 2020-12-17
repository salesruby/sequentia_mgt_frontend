import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT,
  PASSWORD_CHANGE_REQUEST,
  PASSWORD_CHANGE_SUCCESS,
  PASSWORD_CHANGE_FAIL,
} from "../actionTypes";

import { updateObject } from "../../components/helpers/utility.js";

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};
const authSuccess = (state, action) => {
  return updateObject(state, {
    userToken: action.payload.data.access_token,
    userInfo: action.payload.data.user,
    error: null,
    loading: false,
  });
};
const authFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    loading: false,
  });
};
const authLogout = (state, action) => {
  return updateObject(state, {
    userInfo: null,
    loading: false,
  });
};

const passwordChangeStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};
const passwordChangeSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    justChangedPassword: true,
  });
};
const passwordChangeFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
  });
};

function userLoginReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return authStart(state, action);
    case AUTH_LOGIN_SUCCESS:
      return authSuccess(state, action);
    case AUTH_LOGIN_FAIL:
      return authFail(state, action);
    case AUTH_LOGOUT_REQUEST:
      return authStart(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
}

function passwordChangeReducer(state = {}, action) {
  switch (action.type) {
    case PASSWORD_CHANGE_REQUEST:
      return passwordChangeStart(state, action);
    case PASSWORD_CHANGE_SUCCESS:
      return passwordChangeSuccess(state, action);
    case PASSWORD_CHANGE_FAIL:
      return passwordChangeFail(state, action);
    default:
      return state;
  }
}

export { userLoginReducer, passwordChangeReducer };
