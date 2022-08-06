import React from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { deactivateUser, getAllUsers, reactivateUser } from "../../../redux/users/userActions"
//Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from '@mui/icons-material/Replay';

const DashUser = ({user, setModalUser, setUserInfo}) => {
  const dispatch = useDispatch()
  const navigate = useHistory()

  const getUserEdit = (id) => {
      navigate.push(`/edit-user/${id}`)
  };

  const deleteUser = (id) => {
        
    dispatch(deactivateUser(id))
    .then(result =>{ 
      alert(result.Request)
      dispatch(getAllUsers())
    })
    .catch(result => alert(result.Error))
    
  };

const activateUser = (id) => {
    dispatch(reactivateUser(id))
    .then(result =>{ 
      alert(result.Request)
      dispatch(getAllUsers())
    })
    .catch(result => alert(result.Error))
  };

  const handleClickInfo = () => {
    setUserInfo(user)
    setModalUser(true)
  }
  let actualUser = JSON.parse(localStorage.getItem("profile")) 
  return (
            <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 w-auto">
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center  ">
                  <div
                    className=" cursor-pointer font-bold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
                    onClick={handleClickInfo}
                  >
                    Info
                  </div>
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                  {user.username? user.username : 'Unknow'}
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                {user.createdAt.slice(0,10)}
                </span>
              </td>
              <td className="border-t">
                <span className="px-6 py-4 flex items-center">
                  
                    {user.state? <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">Active</span>:
                     <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">Blocked</span>}
                  
                </span>
              </td>
              <td className="border-t">
              {user.id !== actualUser.id? (
                    <div className="text-gray-700  flex w-2.5 gap-3 text-center">
                        
                        <EditIcon
                          className="text-yellow-500 z-50 cursor-pointer"
                          onClick={() => getUserEdit(user.id)}
                        />
                        {user.state === true ? (
                          <DeleteIcon
                            className="text-red-500 cursor-pointer"
                            onClick={() => deleteUser(user.id)}
                          />
                        ) : (
                          <ReplayIcon
                            className="text-green-500 cursor-pointer"
                            onClick={() => activateUser(user.id)}
                          />
                        )}
                      </div>
                    ) : "..."}
              </td>
            </tr>

  )
}

export default DashUser
