import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="px-4 md:px-8 py-2 h-16 flex justify-between items-center shadow-sm bg-white">
        <div className="flex items-center w-2/3">
          {/* Si queremos search */}
        </div>
        <div className="flex items-center w-1/7">
          <div className="flex flex-shrink-0 items-center ml-auto">
            <div className="dropdown inline-block relative">
              <button className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
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
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 bg-white border rounded-lg pt-1 w-11/12">
                <li>
                  <Link
                    className="rounded-t py-2 px-4 block whitespace-no-wrap hover:text-blue-600 hover:bg-gray-200"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-2 px-4 block whitespace-no-wrap hover:text-blue-600 hover:bg-gray-200"
                    to="/update-password"
                  >
                    Update Password
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-b py-2 px-4 block whitespace-no-wrap hover:text-red-600  hover:bg-red-200"
                    to="/"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
