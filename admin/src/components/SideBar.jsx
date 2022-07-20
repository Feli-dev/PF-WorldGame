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
    <div class="bg-white w-64 min-h-screen overflow-y-auto hidden md:block shadow relative z-30">
      <div class="flex items-center px-6 py-3 h-16">
        <div class="text-2xl font-bold tracking-tight text-gray-800">
          Dashboard Admin.
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
              Usuarios
            </Link>
          </li>

          <li>
            <Link
              to="users"
              class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <SportsEsportsIcon className="mr-4 opacity-50" />
              Juegos
            </Link>
          </li>

          <li>
            <Link
              to="users"
              class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <PaidIcon className="mr-4 opacity-50" />
              Pagos
            </Link>
          </li>

          <li>
            <a
              href="#"
              class="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
            >
              <SettingsIcon className="mr-4 opacity-50" />
              Ajustes
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
