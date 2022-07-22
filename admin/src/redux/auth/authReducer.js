// Types
import {
  ERROR,
  GET_USER,
  LOADING_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "../../types";

let initState = {
  profile: "",
  error: "",
  cargando: false,
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        profile: action.payload,
        error: "",
      };
    case LOGIN_USER:
      return {
        ...state,
        profile: action.payload,
        error: "",
      };
    case LOGOUT_USER:
      return {
        ...state,
        profile: "",
        error: "",
      };
    case ERROR:
      return {
        ...state,
        profile: "",
        error: action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        cargando: !state.cargando,
        error: "",
      };
    default:
      return state;
  }
}

export default authReducer;
