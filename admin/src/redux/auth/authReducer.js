// Types
import {
  ERROR,
  GET_USER,
  LOADING_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOADING_USER_AUTH,
} from "../../types";

let initState = {
  profile: "",
  error: "",
  cargando: false,
  cargandoAuth: true,
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
      localStorage.removeItem("profile");
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
    case LOADING_USER_AUTH:
      return {
        ...state,
        cargandoAuth: false,
      };
    default:
      return state;
  }
}

export default authReducer;
