import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import AddIcon from "@mui/icons-material/Add";
import TableUser from "../components/TableUser";
import CardDashboard from "../components/CardDashboard";

const Dashboard = () => {
  return (
    <>
      <body class="antialiased bg-gray-200">
        <div class="h-screen flex ">
          <SideBar />

          <div class="flex-1 flex-col relative z-0 overflow-y-auto">
            <NavBar />

            <div class="md:max-w-6xl md:mx-auto px-4 py-8">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-bold text-gray-800">Dashboard</h2>

                <button class="shadow inline-flex items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline text-white font-semibold py-2 px-4 rounded-lg">
                  <AddIcon />
                  Añadir Usuario
                </button>
              </div>

              <CardDashboard />

              <TableUser />
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Dashboard;
