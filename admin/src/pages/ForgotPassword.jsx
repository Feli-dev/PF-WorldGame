import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3 p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 ">
        <form action="#">
          <h5 className="text-xl font-medium text-gray-900  text-center">
            Forgot Password
          </h5>
          <div className="my-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Email"
              required=""
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium"
          >
            <Link to="/new-password/1">Reset Password</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
