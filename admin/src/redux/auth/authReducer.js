// Types
import {
  ERROR,
  GET_USER,
  LOADING_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOADING_USER_AUTH,
  UPDATE_USER_ADMIN,
} from "../../types";

let initState = {
  profile: "",
  error: "",
  cargando: false,
  cargandoAuth: false,
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
    case LOGOUT_USER:
      return {
        ...state,
        profile: "",
        error: "",
        cargando: false,
        cargandoAuth: false,
      };
    case UPDATE_USER_ADMIN:
      return {
        ...state,
        profile: action.payload,
        error: "",
      };
    default:
      return state;
  }
}

export default authReducer;
