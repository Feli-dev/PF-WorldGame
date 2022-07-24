// Config
import { Redirect, useHistory } from "react-router-dom";
import clienteAxios from "../../config/axios";

// Types
import {
  ERROR,
  GET_USER,
  LOADING_USER,
  LOADING_USER_AUTH,
  LOGIN_USER,
  LOGOUT_USER,
} from "../../types";

function authenticateAction() {
  return async function (dispatch) {
    try {
      const profile = JSON.parse(localStorage.getItem("profile"));
      
      if (!profile) {
        dispatch({
          type: ERROR,
          payload: "Unauthorized User",
        });
        return;
      }

      dispatch({
        type: GET_USER,
        payload: profile,
      });

      dispatch({
        type: LOADING_USER_AUTH,
      });
    } catch (err) {
      console.log(err);
      return dispatch({
        type: ERROR,
        payload: err.response.data.msg,
      });
    }
  };
}

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

      localStorage.setItem("profile", JSON.stringify(data.Request));

      dispatch({
        type: LOGIN_USER,
        payload: data.Request,
      });

      dispatch({
        type: LOADING_USER_AUTH,
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

export { loginAction, authenticateAction };
