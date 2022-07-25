import React, { useEffect, useState } from 'react'

//Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const User = ({user, setModalUser}) => {
  console.log('user', user)
  
  const getUserEdit = () => {
    alert("Usuario Editado");
  };

  const deleteUser = () => {
    alert("Usuario Eliminado");
  };
  
  return (
            <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 w-auto">
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center  ">
                  <div
                    className=" cursor-pointer font-bold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
                    onClick={() => setModalUser(true)}
                  >
                    Info
                  </div>
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  {user.name}
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  20 Jul 2022
                </span>
              </td>
              <td className="border-t">
                <span className="px-6 py-4 flex items-center">
                  
                    {user.state? <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">Active</span>:
                     <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">Block</span>}
                  
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

  )
}

export default User