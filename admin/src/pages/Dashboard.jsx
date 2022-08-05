import React, { useEffect } from "react";

// Icons
import AddIcon from "@mui/icons-material/Add";
import TableUser from "../components/TableUser/TableUser";
import { Link } from "react-router-dom";
import { getAllCountries } from "../redux/contries/countriesActions";
import { useDispatch, useSelector } from "react-redux";
import { getPays } from "../redux/pay/payActions";

// Components
import CardsDashboard from "../components/CardsDashboard";
import TablePay from "../components/TablePay/TablePay";

const Dashboard = () => {
  let dispatch = useDispatch();

  const { profile } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getPays());
  }, [dispatch]);

  return (
    <>
      <div className="md:max-w-6xl md:mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>

          {profile?.authorization !== "Enterprise-Admin" && (
            <Link
              to="add-user"
              className="shadow inline-flex items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline text-white font-semibold py-2 px-4 rounded-lg"
            >
              <AddIcon />
              Add User
            </Link>
          )}
        </div>

        <CardsDashboard />

        {profile?.authorization !== "Enterprise-Admin" && <TableUser />}
        {profile?.authorization !== "Community-Admin" || profile?.authorization === "Pro-admin" && <TablePay />}
      </div>
    </>
  );
};

export default Dashboard;
