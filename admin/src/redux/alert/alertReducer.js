// Types
import { HIDE_ALERT, SHOW_ALERT } from "../types";

let initialState = {
  alert: "",
};

function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: "",
      };
    default:
      return state;
  }
}

export default alertReducer;
