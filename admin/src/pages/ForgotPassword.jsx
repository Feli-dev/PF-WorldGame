import React, { useState } from "react";

// Config
import clienteAxios from "../config/axios";

// Components
import Alerta from "../components/Alerta";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ msg: "", error: false });
  const [errorForm, setErrorForm] = useState({
    emailError: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email === "") {
        setErrorForm({
          emailError: { msg: "A valid email is required" },
        });
        return;
      }
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
        setErrorForm({
          emailError: { msg: "A valid email is required" },
        });
        return;
      }
      if (email.length > 80) {
        setErrorForm({
          emailError: { msg: "That email is too long" },
        });
        return;
      }

      setErrorForm({
        errorEmail: false,
      });

      await clienteAxios.post("/Email", { email });

      localStorage.setItem("email", email);

      setAlert({ msg: "Instructions have been emailed to you.", error: false });

      setEmail("");

      setTimeout(() => {
        setAlert({ msg: "", error: false });
      }, 3000);
    } catch (err) {
      console.log(err);
      if (err.response.data.Request) {
        setAlert({ msg: "Email not found", error: true });

        setTimeout(() => {
          setAlert({ msg: "", error: false });
        }, 3000);
      }
    }
  };

  const { msg } = alert;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3 p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 ">
        <form onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900  text-center">
            Forgot Password
          </h5>
          <div className="my-2">{msg && <Alerta alerta={alert} />}</div>

          <div className="my-4">
            <label
              htmlFor="email"
              className={
                errorForm.emailError
                  ? "block mb-2 text-sm font-medium  text-red-700"
                  : "block mb-2 text-sm font-medium  text-gray-900"
              }
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                errorForm.emailError
                  ? " bg-gray-50 border text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block placeholder-red-300 w-full p-2.5  border-red-500 text-red-900"
                  : "bg-gray-50 border placeholder-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              }
            />
            {errorForm.emailError && (
              <p className="mt-2 text-sm text-red-600 ">
                <span className="font-medium">{errorForm.emailError.msg}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-2 rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
