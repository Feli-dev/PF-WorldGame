// Config
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
} from "../types";

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
        password: user.password
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
      } else if (data.Request === "No se inicio sesión") {
        dispatch({
          type: ERROR,
          payload: { msg: "Wrong credentials", error: true },
        });

        setTimeout(() => {
          dispatch({
            type: ERROR,
            payload: "",
          });
        }, 3000);
        return;
      } 
      else if (data.Request.state === false) {
        dispatch({
          type: ERROR,
          payload: { msg: "Not authorized", error: true },
        })

        setTimeout(() => {
          dispatch({
            type: ERROR,
            payload: "",
          });
        }, 3000);
        return;
      }

      //const {password,...dataUser} = data.Request

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

function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

function updateUserAdmin(updateUser) {
  return async function (dispatch) {
    try {
      const userActual = JSON.parse(localStorage.getItem("profile"));

      await clienteAxios.put(`/User`, {
        ...updateUser,
        password: userActual.password,
        id: userActual.id,
      });

      //const { password, ...user } = updateUser;

      localStorage.setItem(
        "profile",
        JSON.stringify({ ...userActual, ...updateUser })
      );

      dispatch({
        type: UPDATE_USER_ADMIN,
        payload: JSON.parse(localStorage.getItem("profile")),
      });
    } catch (err) {
      if (err.response.data.Request.indexOf("(email)")) {
        dispatch({
          type: ERROR,
          payload: { msg: "Email already registered", error: true },
        });
      } else {
        dispatch({
          type: ERROR,
          payload: { msg: "Username already registered", error: true },
        });
      }

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

function updatePasswordAdmin(updatePassword) {
  return async function (dispatch) {
    try {
      const userActual = JSON.parse(localStorage.getItem("profile"));

      await clienteAxios.put(`/User`, {
        username: userActual.username,
        email: userActual.email,
        ...updatePassword,
        id: userActual.id,
      });

      //const { password, ...user } = updateUser;

      localStorage.setItem(
        "profile",
        JSON.stringify({ ...userActual, ...updatePassword })
      );

      dispatch({
        type: UPDATE_USER_ADMIN,
        payload: JSON.parse(localStorage.getItem("profile")),
      });
    } catch (err) {
      if (err.response.data.Request.indexOf("(password)")) {
        dispatch({
          type: ERROR,
          payload: { msg: "Password invalid", error: true },
        });
      }

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

export {
  loginAction,
  authenticateAction,
  logoutUser,
  updateUserAdmin,
  updatePasswordAdmin,
};
