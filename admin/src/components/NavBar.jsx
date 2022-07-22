import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState(false);

  return (
    <>
      <div className="px-4 md:px-8 py-2 h-16 flex justify-between items-center shadow-sm bg-white">
        <div className="flex items-center w-2/3">
          {/* Si queremos search */}
        </div>
        <div className="flex items-center w-1/7">
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button
              className="relative inline-flex items-center p-2 outline-none"
              onClick={() => setUser(!user)}
            >
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">Andres Guerrero</span>
                <span className="text-sm text-gray-600">Admin</span>
              </div>
              <span className="h-10 w-10 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/ogw/AOh-ky3Ii6IooCwW2Wt4MSNICaWX-Y30xCQGon99Mga6=s64-c-mo"
                  alt="user profile photo"
                  className="h-full w-full object-cover"
                />
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="hidden sm:block h-6 w-6 text-gray-300"
              ></svg>
            </button>
            <div
              className="absolute top-16 bg-white border rounded-md w-56"
              x-show="panel"
              style={{ display: user ? "" : "none" }}
            >
              <Link to="/profile">
                <div className="p-3 hover:bg-blue-100 cursor-pointer">
                  Profile
                </div>
              </Link>
              <Link to="/update-password">
                <div className="p-3 hover:bg-blue-100 cursor-pointer">
                  Update Password
                </div>
              </Link>
              <Link to="/">
                <div className="p-3 bg-red-200 hover:bg-red-500 cursor-pointer">
                  Logout
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
