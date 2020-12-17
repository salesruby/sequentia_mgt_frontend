import { GET_DEMO_REQUESTS } from "../actionTypes";

import { updateObject } from "../../components/helpers/utility.js";

const getDemoRequests = (state, action) => {
  return updateObject(state, {
    demoRequests: action.payload.data.demo_request,
  });
};

function demoRequestsReducer(state = [], action) {
  switch (action.type) {
    case GET_DEMO_REQUESTS:
      return getDemoRequests(state, action);
    default:
      return state;
  }
}

export { demoRequestsReducer };
