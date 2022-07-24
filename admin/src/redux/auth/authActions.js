// Config
import { useHistory } from "react-router-dom";
import clienteAxios from "../../config/axios";

// Types
import {
  ERROR,
  GET_USER,
  LOADING_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../../types";

function loginAction(user) {
  return async function (dispatch) {
    try {
      dispatch({
        type: LOADING_USER,
      });

      const { data } = await clienteAxios.post(`/Login`, {
        username: user.email,
        password: user.password,
      });

      dispatch({
        type: LOGIN_USER,
        payload: data.Request,
      });

      dispatch({
        type: LOADING_USER,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: { msg: err.response.data.Request, error: true },
      });

      setTimeout(() => {
        dispatch({
          type: ERROR,
          payload: "",
        });
      }, 3000);

      return true;
    }
  };
}

export { loginAction };
