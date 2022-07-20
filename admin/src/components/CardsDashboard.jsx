import React from "react";

// Icons
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PaymentIcon from '@mui/icons-material/Payment';
import GamesIcon from '@mui/icons-material/Games';
import PublicIcon from '@mui/icons-material/Public';

const CardsDashboard = () => {
  return (
    <div class="grid grid-cols-4 gap-6 m-4">
      <div class="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-row justify-between items-center font-extrabold">
          Total users
          <PeopleAltIcon />
        </div>
        <div class="mt-8">
          <h3 class="text-2xl">0</h3>
          <p className="text-gray-400">Registered</p>
        </div>
      </div>

      <div class="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-row justify-between items-center font-extrabold">
          Total Payments
          <PaymentIcon />
        </div>
        <div class="mt-8">
          <h3 class="text-2xl">0</h3>
          <p className="text-gray-400">Confirmed</p>
        </div>
      </div>

      <div class="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-row justify-between items-center font-extrabold">
          Total Games
          <GamesIcon />
        </div>
        <div class="mt-8">
          <h3 class="text-2xl">0</h3>
          <p className="text-gray-400">Finished</p>
        </div>
      </div>

      <div class="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-row justify-between items-center font-extrabold">
          Total Countries
          <PublicIcon />
        </div>
        <div class="mt-8">
          <h3 class="text-2xl">0</h3>
          <p className="text-gray-400">Registered</p>
        </div>
      </div>
    </div>
  );
};

export default CardsDashboard;
