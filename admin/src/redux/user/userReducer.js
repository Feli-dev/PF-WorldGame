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
  cargando: true,
};

function userReducer(state = initState, action) {
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
      localStorage.removeItem("token");
      return {
        ...state,
        profile: "",
        error: "",
      };
    case ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        profile: "",
        error: action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        cargando: false,
        error: "",
      };
    default:
      return state;
  }
}

export default userReducer;
