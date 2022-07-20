import React from "react";

const TableUser = () => {
  return (
    <>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800">Últimos Usuarios</h2>

        <a href="#" class="text-blue-600 hover:text-blue-500 font-medium">
          Ver todos
        </a>
      </div>
      <div class="overflow-x-auto bg-white rounded-lg shadow">
        <table class="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr class="text-left">
              <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Perfil
              </th>
              <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Nombre
              </th>
              <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Fecha de registro
              </th>
              <th class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs ">
                Estado
              </th>
              <th class="x-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="focus-within:bg-gray-200 overflow-hidden">
              <td class="border-t">
                <span class="text-gray-700 px-6 py-4 flex items-center">
                  <div class="font-bold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full">
                    AD
                  </div>
                </span>
              </td>
              <td class="border-t">
                <span class="text-gray-700 px-6 py-4 flex items-center">
                  Andres Guerrero
                </span>
              </td>
              <td class="border-t">
                <span class="text-gray-700 px-6 py-4 flex items-center">
                  20 Jul 2022
                </span>
              </td>
              <td class="border-t">
                <span class="px-6 py-4 flex items-center">
                  <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">
                    Activo
                  </span>
                </span>
              </td>
              <td class="border-t">
                <span class="text-gray-700 px-6 py-4 flex items-center">
                  10
                </span>
              </td>
            </tr>

            <tr class="focus-within:bg-gray-200 overflow-hidden">
              <td class="border-t">
                <span class="text-gray-700 px-6 py-4 flex items-center">
                  <div class="font-bold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full">
                    AD
                  </div>
                </span>
              </td>
              <td class="border-t">
                <span class="text-gray-700 px-6 py-4 flex items-center">
                  Andres Guerrero
                </span>
              </td>
              <td class="border-t">
                <span class="text-gray-700 px-6 py-4 flex items-center">
                  20 Jul 2022
                </span>
              </td>
              <td class="border-t">
                <span class="px-6 py-4 flex items-center">
                  <span class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    Bloqueado
                  </span>
                </span>
              </td>
              <td class="border-t">
                <span class="text-gray-700 px-6 py-4 flex items-center">
                  10
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableUser;
