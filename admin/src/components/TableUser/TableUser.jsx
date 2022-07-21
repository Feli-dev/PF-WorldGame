import React, { useState } from "react";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalUser from "./ModalUser/ModalUser";

const TableUser = () => {
  const [modalUser, setModalUser] = useState(false);

  const getUserEdit = () => {
    alert("Usuario Editado");
  };

  const deleteUser = () => {
    alert("Usuario Eliminado");
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Latest Users</h2>

        <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
          See all
        </a>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Profile
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Name
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Registration date
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs ">
                State
              </th>
              <th className="x-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 ">
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center  ">
                  <div
                    className=" cursor-pointer font-bold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
                    onClick={() => setModalUser(true)}
                  >
                    AD
                  </div>
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  Andres Guerrero
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  20 Jul 2022
                </span>
              </td>
              <td className="border-t">
                <span className="px-6 py-4 flex items-center">
                  <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">
                    Active
                  </span>
                </span>
              </td>
              <td className="border-t">
                <div className="text-gray-700  flex w-2.5 gap-3 text-center">
                  <EditIcon
                    className="text-yellow-500 z-50 cursor-pointer"
                    onClick={getUserEdit}
                  />
                  <DeleteIcon
                    className="text-red-500 cursor-pointer"
                    onClick={deleteUser}
                  />
                </div>
              </td>
            </tr>

            <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 ">
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  <div
                    className=" cursor-pointer font-bold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
                    onClick={() => setModalUser(true)}
                  >
                    AD
                  </div>
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  Andres Guerrero
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  20 Jul 2022
                </span>
              </td>
              <td className="border-t">
                <span className="px-6 py-4 flex items-center">
                  <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    blocked
                  </span>
                </span>
              </td>
              <td className="border-t">
                <div className="text-gray-700  flex w-2.5 gap-3 text-center">
                  <EditIcon
                    className="text-yellow-500 z-50 cursor-pointer"
                    onClick={getUserEdit}
                  />
                  <DeleteIcon
                    className="text-red-500 cursor-pointer"
                    onClick={deleteUser}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {modalUser && <ModalUser setModalUser={setModalUser} />}
    </>
  );
};

export default TableUser;
