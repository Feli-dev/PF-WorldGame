import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState(false);

  return (
    <>
      <div class="px-4 md:px-8 py-2 h-16 flex justify-between items-center shadow-sm bg-white">
        <div class="flex items-center w-2/3">{/* Si queremos search */}</div>
        <div class="flex items-center w-1/7">
          <div class="flex flex-shrink-0 items-center ml-auto">
            <button
              class="relative inline-flex items-center p-2 outline-none"
              onClick={() => setUser(!user)}
            >
              <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span class="font-semibold">Andres Guerrero</span>
                <span class="text-sm text-gray-600">Admin</span>
              </div>
              <span class="h-10 w-10 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/ogw/AOh-ky3Ii6IooCwW2Wt4MSNICaWX-Y30xCQGon99Mga6=s64-c-mo"
                  alt="user profile photo"
                  class="h-full w-full object-cover"
                />
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="hidden sm:block h-6 w-6 text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="absolute top-16 bg-white border rounded-md w-56"
              x-show="panel"
              style={{ display: user ? "" : "none" }}
            >
              <Link to="/profile">
                <div class="p-3 hover:bg-blue-100 cursor-pointer">Profile</div>
              </Link>
              <Link to="/update-password">
                <div class="p-3 hover:bg-blue-100 cursor-pointer">
                  Update Password
                </div>
              </Link>
              <Link to="/">
                <div class="p-3 bg-red-200 hover:bg-red-500 cursor-pointer">
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
