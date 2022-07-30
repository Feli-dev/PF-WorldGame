import React from "react";

// Icons
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PaymentIcon from '@mui/icons-material/Payment';
import GamesIcon from '@mui/icons-material/Games';
import PublicIcon from '@mui/icons-material/Public';
import { useSelector } from "react-redux";

const CardsDashboard = () => {
  let allUsers = useSelector(state => state.userReducer.users)
  let payments = useSelector(state => state.payReducer.pays)
  return (
    <div className="grid grid-cols-4 gap-6 m-4">
      <div className="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <div className="flex flex-row justify-between items-center font-extrabold">
          Total users
          <PeopleAltIcon />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl">{allUsers.length}</h3>
          <p className="text-gray-400">Registered</p>
        </div>
      </div>

      <div className="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <div className="flex flex-row justify-between items-center font-extrabold">
          Total Payments
          <PaymentIcon />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl">{payments.length}</h3>
          <p className="text-gray-400">Confirmed</p>
        </div>
      </div>

      <div className="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
        <div className="flex flex-row justify-between items-center font-extrabold">
          Total Games
          <GamesIcon />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl">0</h3>
          <p className="text-gray-400">Finished</p>
        </div>
      </div>

      <div className="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <div className="flex flex-row justify-between items-center font-extrabold">
          Total Countries
          <PublicIcon />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl">250</h3>
          <p className="text-gray-400">Registered</p>
        </div>
      </div>
    </div>
  );
};

export default CardsDashboard;
