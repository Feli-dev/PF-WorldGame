import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutUser } from "../redux/auth/authActions";

// Helper
import capitalized from "../utils/capitalized";

import MenuIcon from "@mui/icons-material/Menu";
import { handleMenu } from "../redux/ui/uiActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();

  const { profile } = useSelector((state) => state.authReducer);

  const logout = () => {
    localStorage.removeItem("profile");
    dispatch(logoutUser());
    navigate.push("");
  };

  return (
    <>
      <div className="px-4 md:px-8 py-2 h-16 flex justify-between items-center shadow-sm bg-white">
        <div className="flex items-center w-2/3 lg:hidden">
          <MenuIcon
            className="cursor-pointer"
            onClick={() => dispatch(handleMenu())}
          />
        </div>
        <div className="flex items-center w-1/7 lg:w-full">
          <div className="flex flex-shrink-0 items-center ml-auto">
            <div className="dropdown inline-block relative">
              <button className="text-gray-700 font-semibold py-2 lg:px-4 rounded inline-flex items-center">
                <div className="hidden mr-5 lg:mr-0 md:flex md:flex-col md:items-end md:leading-tight">
                  <span className="font-semibold">
                    {capitalized(profile?.name)}
                  </span>
                  <span className="text-sm text-gray-600">
                    {capitalized(profile?.username)}
                  </span>
                </div>
                <span className="text-gray-700 lg:px-6 py-4 flex items-center  ">
                  <div className="cursor-pointer font-semibold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full">
                    {profile?.username?.charAt(0).toUpperCase()}
                  </div>
                </span>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 bg-white border rounded-lg  right-5 pt-1 lg:w-11/12">
                <li>
                  <Link
                    className="rounded-t py-2 px-4 block whitespace-no-wrap text-left hover:text-blue-600 hover:bg-gray-200"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-2 px-4 block whitespace-no-wrap text-left hover:text-blue-600 hover:bg-gray-200"
                    to="/update-password"
                  >
                    Update Password
                  </Link>
                </li>
                <li>
                  <button
                    className="rounded-b w-full text-left py-2 px-4 block whitespace-no-wrap hover:text-red-600  hover:bg-red-200"
                    onClick={logout}
                  >
                    Logout
                  </button>
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
