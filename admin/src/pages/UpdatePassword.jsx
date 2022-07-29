import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alerta from "../components/Alerta";

// Actions
import { updatePasswordAdmin } from "../redux/auth/authActions";

const UpdatePassword = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.authReducer);

  const [user, setUser] = useState({
    password: "",
    newPassword: "",
    confPassword: "",
  });

  const [errorForm, setErrorForm] = useState({
    passwordError: false,
    newPasswordError: false,
    confPasswordError: false,
  });

  const [infoForm, setInfoForm] = useState("");

  const { password, confPassword, newPassword } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userActual = JSON.parse(localStorage.getItem("profile"));

    if (password === "" && confPassword === "" && newPassword === "") {
      setErrorForm({
        passwordError: true,
        confPasswordError: true,
        newPasswordError: true,
      });
      return;
    } else if (password === "") {
      setErrorForm({
        passwordError: true,
        confPasswordError: false,
        newPasswordError: false,
      });
      return;
    } else if (password !== userActual.password) {
      setErrorForm({
        passwordError: { msg: "Incorrect password" },
        confPasswordError: false,
        newPasswordError: false,
      });
      return;
    } else if (newPassword === "") {
      setErrorForm({
        passwordError: false,
        confPasswordError: false,
        newPasswordError: true,
      });
      return;
    } else if (confPassword === "") {
      setErrorForm({
        passwordError: false,
        confPasswordError: true,
        newPasswordError: false,
      });
      return;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d).{4,}$/.test(newPassword)) {
      setErrorForm({
        passwordError: false,
        confPasswordError: false,
        newPasswordError: {
          msg: "Minimum 4 characters, one letter and a number",
        },
      });
      return;
    } else if (newPassword !== confPassword) {
      setErrorForm({
        passwordError: false,
        confPasswordError: { msg: "Passwords dont match" },
        newPasswordError: false,
      });

      return;
    }

    setErrorForm({
      passwordError: false,
      confPasswordError: false,
      newPasswordError: false,
    });

    const error = await dispatch(
      updatePasswordAdmin({ password: user.newPassword })
    );

    if (!error) {
      setInfoForm({ message: "Password updated successfully", error: false });

      setTimeout(() => {
        setInfoForm({ message: "", error: false });
      }, 3000);

      setUser({
        password: "",
        newPassword: "",
        confPassword: "",
      });

      return;
    }
  };

  const { msg } = error;
  const { message } = infoForm;

  return (
    <>
      <div className="container mx-auto">
        <div className="md:max-w-6xl md:mx-auto px-4 py-7">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Account Settings
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
              <div className="md:w-2/3 w-full flex flex-col p-4 justify-center m-auto">
                {msg && <Alerta alerta={error} />}
                {message && (
                  <Alerta alerta={{ ...infoForm, msg: infoForm.message }} />
                )}
                <div className="py-2 px-16">
                  <label
                    htmlFor="password"
                    className={
                      errorForm.passwordError
                        ? "text-sm text-red-700"
                        : "text-sm text-gray-600"
                    }
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                    id="password"
                    placeholder="Password"
                    className={
                      errorForm.passwordError
                        ? " mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-red-500 text-red-900"
                        : "mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-gray-300 text-gray-900"
                    }
                  />
                  {errorForm.passwordError && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">
                        {errorForm.passwordError.msg
                          ? errorForm.passwordError.msg
                          : "Password is required"}
                      </span>
                    </p>
                  )}
                </div>
                <div className="py-2 px-16">
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
                    value={newPassword}
                    name="newPassword"
                    onChange={handleChange}
                    id="newpassword"
                    placeholder="New Password"
                    className={
                      errorForm.newPasswordError
                        ? " mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-red-500 text-red-900"
                        : "mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-gray-300 text-gray-900"
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
                <div className="py-2 px-16">
                  <label
                    htmlFor="confpassword"
                    className={
                      errorForm.confPasswordError
                        ? "text-sm text-red-700"
                        : "text-sm text-gray-600"
                    }
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confPassword}
                    name="confPassword"
                    onChange={handleChange}
                    id="confpassword"
                    placeholder="Confirm New Password"
                    className={
                      errorForm.confPasswordError
                        ? " mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-red-500 text-red-900"
                        : "mt-2 border-2  px-3 py-2 block w-full rounded-lg text-base  focus:outline-none  border-gray-300 text-gray-900"
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
                <input
                  type="submit"
                  className="bg-slate-500 w-1/2 my-3 mx-auto text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer"
                  value="Save"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
