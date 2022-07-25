import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllUsers } from '../../redux/users/userActions'
// Icons
import ModalUser from "./ModalUser/ModalUser";
//Components
import User from './user/DashUser'



const TableUser = () => {
  const [modalUser, setModalUser] = useState(false);
  const [userInfo, setUserInfo] = useState({})

  let dispatch = useDispatch();
  let lastUsers = useSelector((state) => state.userReducer.last);
  
  

  useEffect(()=>{
    // console.log('entro')
    dispatch(getAllUsers())
  },[]);

  // console.log('Table', allUsers)
  // console.log('length', allUsers)

  
  return (
    <>
      <div className="flex items-center justify-between mb-4" >
        <h2 className="text-xl font-bold text-gray-800">Latest Users</h2>

        <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
          See all
        </a>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped ">
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
          
          <tbody className = " max-h-max border-solid border-2 overflow-y-auto">
           {lastUsers.length
           ?lastUsers.map(user => user?<User key={user.id} user={user} setModalUser={setModalUser} setUserInfo={setUserInfo}/>:null)
           :<tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 w-auto">Sin usuarios</tr> } 
           
          </tbody>
        </table>
      </div>

      {modalUser && <ModalUser userInfo={userInfo} setModalUser={setModalUser} />}
    </>
  );
};

export default TableUser;
