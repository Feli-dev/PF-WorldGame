import React, { useEffect, useState } from "react";
import ModalUser from "../components/TableUser/ModalUser/ModalUser";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/users/userActions";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";



const Users = () => {
    const dispatch = useDispatch()
    const [modalUser, setModalUser] = useState(false);
    let allUsers = useSelector((state) => state.userReducer.users)
    
    useEffect(() => {
        console.log('entro')
        dispatch(getAllUsers())
      },[dispatch])

      
    
    const getUserEdit = () => {
        alert("Usuario Editado");
      };
    
    const deleteUser = () => {
        alert("Usuario Eliminado");
      };
      console.log("aaa", allUsers)
  return (
    <div className="md:max-w-8xl md:mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4 ml-2">
            <h2 className="text-xl font-bold text-gray-800">All Users</h2>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr className="text-left">
            <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Username
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Name
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Register date
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Country
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Email
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Points
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Games
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs ">
                Type
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs ">
                State
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs ">
                Rol
              </th>
              <th className="x-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 ">
            <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  AndresG
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
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  Argentina
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center  ">
                  <div
                    className=" cursor-pointer font-semibold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
                    onClick={() => setModalUser(true)}
                  >
                    A
                  </div>
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center ml-3">
                  100
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center ml-3">
                  75
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  Premium
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
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  Admin
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


        {allUsers.Request && allUsers.Request.map((user) =>{
            return (
            <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 ">
            <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  {user.username}
                </span>
              </td>  
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                    {user.name}
                </span>
              </td>
              
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  añadir date
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                {user.country}
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center  ">
                  <div
                    className=" cursor-pointer font-semibold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
                    onClick={() => setModalUser(true)}
                  >
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center ml-3">
                  {user.points}
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center ml-3">
                  {user.games?.length}
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  {user.premium}
                </span>
              </td>

              <td className="border-t">
                <span className="px-6 py-4 flex items-center">
                {user.state === true ? 
                    (<span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">
                    Active
                    </span>)
                    :(
                    <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    blocked
                  </span>)}
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  {user.authorization}
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
        )})}
            

          </tbody>
        </table>
      </div>

      {modalUser && <ModalUser setModalUser={setModalUser} />}
    </div>
  );
};

export default Users