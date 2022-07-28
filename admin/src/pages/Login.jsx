import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Alerta from "../components/Alerta";
import { loginAction } from "../redux/auth/authActions";

const Login = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.authReducer);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorForm, setErrorForm] = useState({
    emailError: false,
    passwordError: false,
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" && password === "") {
      setErrorForm({
        emailError: true,
        passwordError: true,
      });
      return;
    } else if (email === "") {
      setErrorForm({
        emailError: true,
        passwordError: false,
      });
      return;
    } else if (password === "") {
      setErrorForm({
        emailError: false,
        passwordError: true,
      });
      return;
    }

    setErrorForm({
      emailError: false,
      passwordError: false,
    });

    const error = await dispatch(loginAction(user));

    if (!error) {
      navigate.push("/dashboard");
    }
  };

  const { msg } = error;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3 p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 ">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900  text-center">
            Login
          </h5>
          {msg && <Alerta alerta={error} />}
          <div>
            <label
              htmlFor="username"
              className={
                errorForm.emailError
                  ? "block mb-2 text-sm font-medium  text-red-700"
                  : "block mb-2 text-sm font-medium  text-gray-900"
              }
            >
              Username
            </label>
            <input
              type="text"
              name="email"
              value={email}
              id="username"
              placeholder="Username"
              className={
                errorForm.emailError
                  ? " bg-gray-50 border text-sm rounded-lg  block w-full p-2.5 border-red-500 text-red-900"
                  : "bg-gray-50 border text-sm rounded-lg block w-full p-2.5 border-gray-300 text-gray-900"
              }
              required=""
              onChange={handleChange}
            />
            {errorForm.emailError && (
              <p className="mt-2 text-sm text-red-600 ">
                <span className="font-medium">Username is required</span>
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className={
                errorForm.passwordError
                  ? "block mb-2 text-sm font-medium  text-red-700"
                  : "block mb-2 text-sm font-medium  text-gray-900"
              }
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Password"
              className={
                errorForm.passwordError
                  ? " bg-gray-50 border text-sm rounded-lg  block w-full p-2.5 border-red-500 text-red-900"
                  : "bg-gray-50 border text-sm rounded-lg block w-full p-2.5 border-gray-300 text-gray-900"
              }
              required=""
              onChange={handleChange}
            />
            {errorForm.passwordError && (
              <p className="mt-2 text-sm text-red-600 ">
                <span className="font-medium">Password is required</span>
              </p>
            )}
          </div>
          <div className="flex items-start">
            <Link
              to="forgot-password"
              className="ml-auto text-sm text-blue-700 hover:underline "
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
