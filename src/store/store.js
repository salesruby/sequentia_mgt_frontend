import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

import {
  passwordChangeReducer,
  userLoginReducer,
} from "./reducers/authReducer";
import { demoRequestsReducer } from "./reducers/demoRequestsReducer";
import { apiFetchReducer } from "./reducers/apiFetchReducer";

const userInfo = Cookie.getJSON("userInfo") || null;
const userToken = Cookie.getJSON("userToken") || null;

const initialState = { userLogin: { userInfo, userToken } };

const reducer = combineReducers({
  userLogin: userLoginReducer,
  apiStatus: apiFetchReducer,
  demoRequests: demoRequestsReducer,
  passwordChange: passwordChangeReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
