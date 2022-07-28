import React, { useEffect, useState } from "react";
import ModalUser from "../components/TableUser/ModalUser/ModalUser";
import { useDispatch, useSelector } from "react-redux";
import { deactivateUser, getAllUsers, reactivateUser, getByCountries } from "../redux/users/userActions";
import  validateCountry from "../utils/validateCountry";


// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from '@mui/icons-material/Replay';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';




const Users = () => {
  const dispatch = useDispatch()
  const [modalUser, setModalUser] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [inputFilter, setInputFilter] = useState({
        country:''
  })
  let [error, setError] = useState({active: true})
  
  let allUsers = useSelector((state) => state.userReducer.filterUsers)
  
  // useEffect(() => {
  //     // console.log('entro')
  //     dispatch(getAllUsers())
  // },[dispatch])
   
  
  const getUserEdit = () => {
      alert("Usuario Editado");
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
      //console.log("id", id)
      dispatch(reactivateUser(id))
      .then(result =>{ 
        alert(result.Request)
        dispatch(getAllUsers())
      })
      .catch(result => alert(result.Error))
    };

  function handleChangeCountry(event){
    setInputFilter(previus => {
      return {
          ...previus,[event.target.name]: event.target.value
      }
    })
    setError(validateCountry({
      ...inputFilter, [event.target.name]: event.target.value
    })) 
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
      // dispatch(getByCountries(inputFilter.country))
      // setInputFilter({
      //   country:'',
      // })
      alert('hola')
    }
  
  
    
    
  return (
    <div className="md:max-w-8xl md:mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4 ml-2">
          <h2 className="text-xl font-bold text-gray-800">All Users</h2>
          <div className="flex items-center justify-between flex-col mb-4 ml-2  ">
          <form onSubmit={handleSubmit}> 
            <div className="p-0 flex items-center m-0">
              <input
                className="mt-0 h-7 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none "
                type="text"
                value={inputFilter.country}
                name="country"
                placeholder="Search by country"
                onChange={handleChangeCountry}
              />
              <button type="submit" className="pt-0 items-center"> 
                <SearchOutlinedIcon/>
              </button>
            </div>
              {error.country && <span className=" m-0 p-0 ml-1 rounded-full text-xs uppercase tracking-wide font-semibold bg-red-200 text-red-800">  {error.country}</span>}  
          </form>
          <div className="flex w-full items-center justify-evenly mt-4 ">
          <select
                  id="state"
                  className="text-xs h-7 border border-gray-300 text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 w-fit"
                  onChange={event => console.log('hola')}
                  defaultValue='State'
                >
                  <option disabled='State'>State</option>
                  <option value='Active'>Active</option>
                  <option value='Blocked'>Blocked</option>
                  
                  
          </select>
          <select
                  id="userType"
                  className="text-xs mr-2 h-7 border border-gray-300 text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 w-fit "
                  onChange={event => console.log('hola')}
                  defaultValue='Type user'
                >
                  <option disabled='Type user'>Type user</option>
                  <option value='Premium'>Premium</option>
                  <option value='Normal'>Normal</option>
                  
                  
          </select>

          </div>
          
          </div>
              
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr className="text-left">
            <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Email
              </th>
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


        {allUsers && allUsers.map((user) =>{

            const handleClickInfo = () => {
              setUserInfo(user)
              setModalUser(true)
            }
            return (
            <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 ">
            <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center  ">
                  <div
                    className=" cursor-pointer font-semibold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
                    onClick={handleClickInfo}
                  >
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                </span>
              </td>

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
                  {user.createdAt.slice(0,10)}
                </span>
              </td>
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                {user.country}
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
                  {user.premium === true? "Premium" : "Normal"}
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
                  {user.state === true ?
                  <DeleteIcon
                  className="text-red-500 cursor-pointer"
                  onClick={() => deleteUser(user.id)}
                />
                  : <ReplayIcon className="text-green-500 cursor-pointer"
                  onClick={() => activateUser(user.id)}
                  />
                  }
                  
                </div>
              </td>
            </tr>
        )})}
            

          </tbody>
        </table>
      </div>

      {modalUser && <ModalUser userInfo={userInfo} setModalUser={setModalUser} />}
    </div>
  );
};

export default Users