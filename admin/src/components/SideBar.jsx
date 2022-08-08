import React from "react";
import { Link, useLocation } from "react-router-dom";

// Icons
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PaidIcon from "@mui/icons-material/Paid";
import { useDispatch, useSelector } from "react-redux";
import GradingIcon from "@mui/icons-material/Grading";
import { handleMenu } from "../redux/ui/uiActions";

const SideBar = () => {
  let { profile } = useSelector((state) => state.authReducer);
  let { menu } = useSelector((state) => state.uiReducer);

  let url = useLocation().pathname
  
  const dispatch = useDispatch();
  let linksStyle =
    "mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:bg-gray-200";
  let activeStyle =
    "mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 text-blue-600";

  return (
    <div
      className={
        menu
          ? "bg-white sm:w-60 lg:w-64 w-screen min-h-screen overflow-y-auto block shadow relative animation"
          : "bg-white w-64 min-h-screen overflow-y-auto hidden lg:block shadow relative animation"
      }
    >
      <div className="flex items-center px-6 py-3 h-16 sm:mt-4 lg:mt-2">
        <div className="text-xl font-bold tracking-tight text-gray-800 flex justify-between w-full">
          <Link to="/dashboard">Dashboard Admin</Link>
          {menu && (
            <span className="sm:hidden" onClick={() => dispatch(handleMenu())}>
              X
            </span>
          )}
        </div>
      </div>

      <div className="px-4 py-2">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className={url === "/dashboard" ? activeStyle : linksStyle}
              onClick={() => {
                dispatch(handleMenu());
              }}
            >
              <GridViewIcon className="mr-4 opacity-50" />
              Dashboard
            </Link>
          </li>

          {profile?.authorization !== "Enterprise-Admin" && (
            <>
              <li>
                <Link
                  to="/users"
                  className={url === "/users" ? activeStyle : linksStyle}
                  onClick={() => {
                    dispatch(handleMenu());
                  }}
                >
                  <PersonIcon className="mr-4 opacity-50" />
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className={url === "/games" ? activeStyle : linksStyle}
                  onClick={() => {
                    dispatch(handleMenu());
                  }}
                >
                  <SportsEsportsIcon className="mr-4 opacity-50" />
                  Games
                </Link>
              </li>
            </>
          )}
          {profile?.authorization !== "Community-Admin" && (
            <li>
              <Link
                to="/pays"
                className={url === "/pays" ? activeStyle : linksStyle}
                onClick={() => {
                  dispatch(handleMenu());
                }}
              >
                <PaidIcon className="mr-4 opacity-50" />
                Payments
              </Link>
            </li>
          )}

          {profile?.authorization !== "Enterprise-Admin" && (
            <li>
              <Link
                to="/reviews"
                className={url === "/reviews" ? activeStyle : linksStyle}
                onClick={() => {
                  dispatch(handleMenu());
                }}
              >
                <GradingIcon className="mr-4 opacity-50" />
                Reviews
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
