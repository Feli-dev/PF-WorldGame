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
  UPDATE_USER_ADMIN,
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
        return "redirect";
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

      if (data.Request.authorization === "User") {
        dispatch({
          type: ERROR,
          payload: { msg: "Not authorized", error: true },
        });

        setTimeout(() => {
          dispatch({
            type: ERROR,
            payload: "",
          });
        }, 3000);

        return;
      }
      
      const {password,...dataUser} = data.Request 

      localStorage.setItem("profile", JSON.stringify(dataUser));

      dispatch({
        type: LOGIN_USER,
        payload: data.Request,
      });

      dispatch({
        type: LOADING_USER_AUTH,
      });
    } catch (err) {
      console.log(err);
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

function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

function updateUserAdmin(updateUser) {
  return async function (dispatch) {
    try {
      await clienteAxios.put(`/User`, { ...updateUser });

      const userActual = JSON.parse(localStorage.getItem("profile"));

      const { password, ...user } = updateUser;

      localStorage.setItem(
        "profile",
        JSON.stringify({ ...userActual, ...user })
      );

      dispatch({
        type: UPDATE_USER_ADMIN,
        payload: JSON.parse(localStorage.getItem("profile")),
      });
    } catch (err) {
      console.log(err);
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

export { loginAction, authenticateAction, logoutUser, updateUserAdmin };
