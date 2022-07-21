import React from "react";
import { Link } from "react-router-dom";

// Icons
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PaidIcon from "@mui/icons-material/Paid";
import SettingsIcon from "@mui/icons-material/Settings";

const SideBar = () => {
  return (
    <div class="bg-white w-64 min-h-screen overflow-y-auto hidden md:block shadow relative">
      <div class="flex items-center px-6 py-3 h-16">
        <div class="text-xl font-bold tracking-tight text-gray-800">
          <Link to="/dashboard">Dashboard Admin</Link>
        </div>
      </div>

      <div class="px-4 py-2">
        <ul>
          <li>
            <Link
              to="dashboard"
              class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <GridViewIcon className="mr-4 opacity-50" />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="users"
              class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <PersonIcon className="mr-4 opacity-50" />
              Users
            </Link>
          </li>

          <li>
            <Link
              to="users"
              class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <SportsEsportsIcon className="mr-4 opacity-50" />
              Games
            </Link>
          </li>

          <li>
            <Link
              to="users"
              class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <PaidIcon className="mr-4 opacity-50" />
              Payments
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <SettingsIcon className="mr-4 opacity-50" />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
