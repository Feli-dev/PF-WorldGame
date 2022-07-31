import React, { useEffect, useState } from "react";

// Router
import { Link, useHistory, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";

// Config
import clienteAxios from "../config/axios";

const NewPassword = () => {
  const [alert, setAlert] = useState({ msg: "", error: false });

  const [user, setUser] = useState({
    newPassword: "",
    confPassword: "",
    idUser: "",
  });

  const [errorForm, setErrorForm] = useState({
    newPasswordError: false,
    confPasswordError: false,
    authError: false,
  });

  const [infoForm, setInfoForm] = useState({ message: "", error: false });

  const { idUser, confPassword, newPassword } = user;

  const { id } = useParams();
  const navigate = useHistory();

  useEffect(() => {
    const authParams = async () => {
      const userActual = localStorage.getItem("email");

      const { data } = await clienteAxios.get(`/User/${id}`);

      if (!userActual || userActual === "null") {
        setErrorForm({
          ...errorForm,
          authError: { msg: "Invalid action" },
        });
        navigate.push("/");
        return;
      } else if (data.Request.email !== userActual) {
        setErrorForm({
          ...errorForm,
          authError: { msg: "Invalid action" },
        });
        navigate.push("/");
        return;
      }

      setUser({ ...user, idUser: id });
    };
    authParams();
  }, [id]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userActual = localStorage.getItem("email");

      if (confPassword === "" && newPassword === "") {
        setErrorForm({
          confPasswordError: true,
          newPasswordError: true,
          authError: false,
        });
        return;
      } else if (newPassword === "") {
        setErrorForm({
          confPasswordError: false,
          newPasswordError: true,
          authError: false,
        });
        return;
      } else if (!/^(?=.*[A-Za-z])(?=.*\d).{4,}$/.test(newPassword)) {
        setErrorForm({
          confPasswordError: false,
          newPasswordError: {
            msg: "Minimum 4 characters, one letter and a number",
          },
          authError: false,
        });
        return;
      } else if (confPassword === "") {
        setErrorForm({
          confPasswordError: true,
          newPasswordError: false,
          authError: false,
        });
        return;
      } else if (newPassword !== confPassword) {
        setErrorForm({
          confPasswordError: { msg: "Passwords dont match" },
          newPasswordError: false,
          authError: false,
        });

        return;
      }

      setErrorForm({
        confPasswordError: false,
        newPasswordError: false,
        authError: false,
      });

      await clienteAxios.put("/Email", {
        id: idUser,
        email: userActual,
        password: newPassword,
      });

      setInfoForm({ message: "Password updated successfully", error: false });

      setUser({
        newPassword: "",
        confPassword: "",
        idUser: "",
      });

      localStorage.removeItem("email");

      setTimeout(() => {
        setInfoForm({ message: "", error: false });
        navigate.push("/");
      }, 2000);
    } catch (err) {
      console.log(err);
      if (err.response.data.Request) {
        setAlert({ msg: "Please try again later", error: true });

        setTimeout(() => {
          setAlert({ msg: "", error: false });
        }, 3000);
      }
    }
  };

  const { msg } = alert;
  const { message } = infoForm;
  const { authError } = errorForm;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3 p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 ">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900  text-center">
            New Password
          </h5>
          <div className="my-2">
            {msg && <Alerta alerta={alert} />}
            {message && (
              <Alerta
                alerta={{ msg: infoForm.message, error: infoForm.error }}
              />
            )}
            {authError?.msg && (
              <Alerta alerta={{ msg: authError.msg, error: true }} />
            )}
          </div>
          <div>
            <label
              htmlFor="newpassword"
              className={
                errorForm.newPasswordError
                  ? "text-sm text-red-700"
                  : "text-sm text-gray-600"
              }
            >
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              id="newpassword"
              placeholder="New Password"
              value={newPassword}
              onChange={handleChange}
              className={
                errorForm.newPasswordError
                  ? " bg-gray-50 border text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block placeholder-red-300 w-full p-2.5  border-red-500 text-red-900"
                  : "bg-gray-50 border placeholder-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              }
            />
            {errorForm.newPasswordError && (
              <p className="mt-2 text-sm text-red-600 ">
                <span className="font-medium">
                  {errorForm.newPasswordError.msg
                    ? errorForm.newPasswordError.msg
                    : "New Password is required"}
                </span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confpassword"
              className={
                errorForm.confPasswordError
                  ? "text-sm text-red-700"
                  : "text-sm text-gray-600"
              }
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confPassword"
              id="confpassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={confPassword}
              className={
                errorForm.confPasswordError
                  ? " bg-gray-50 border text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block placeholder-red-300 w-full p-2.5  border-red-500 text-red-900"
                  : "bg-gray-50 border placeholder-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              }
            />
            {errorForm.confPasswordError && (
              <p className="mt-2 text-sm text-red-600 ">
                <span className="font-medium">
                  {errorForm.confPasswordError.msg
                    ? errorForm.confPasswordError.msg
                    : "New Password is required"}
                </span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
