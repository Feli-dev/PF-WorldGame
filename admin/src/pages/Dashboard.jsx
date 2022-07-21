import React from "react";

// Components
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

// Icons
import AddIcon from "@mui/icons-material/Add";
import TableUser from "../components/TableUser/TableUser";
import { Link } from "react-router-dom";

// Components
import CardsDashboard from "../components/CardsDashboard";

const Dashboard = () => {
  return (
    <>
      <div class="md:max-w-6xl md:mx-auto px-4 py-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-800">Dashboard</h2>

          <Link to="add-user"class="shadow inline-flex items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline text-white font-semibold py-2 px-4 rounded-lg">
            <AddIcon />
            Add User
          </Link>
        </div>

        <CardsDashboard />

        <TableUser />
      </div>
    </>
  );
};

export default Dashboard;
