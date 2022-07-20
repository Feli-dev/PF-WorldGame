import React from "react";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const CardDashboard = () => {
  return (
    <div class="grid grid-cols-4 gap-6 m-4">
      <div class="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-row justify-between items-center font-extrabold">
          Total Usuarios
          <PeopleAltIcon />
        </div>
        <div class="mt-8">
          <h3 class="text-2xl">0</h3>
          <p className="text-gray-400">Registrados</p>
        </div>
      </div>

      <div class="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-row justify-between items-center font-extrabold">
          Total Pagos
          <PeopleAltIcon />
        </div>
        <div class="mt-8">
          <h3 class="text-2xl">0</h3>
          <p className="text-gray-400">Finalizados</p>
        </div>
      </div>

      <div class="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-row justify-between items-center font-extrabold">
          Total Juegos
          <PeopleAltIcon />
        </div>
        <div class="mt-8">
          <h3 class="text-2xl">0</h3>
          <p className="text-gray-400">Terminados</p>
        </div>
      </div>

      <div class="p-5  flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-row justify-between items-center font-extrabold">
          Total Paises
          <PeopleAltIcon />
        </div>
        <div class="mt-8">
          <h3 class="text-2xl">0</h3>
          <p className="text-gray-400">Registrados</p>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;
