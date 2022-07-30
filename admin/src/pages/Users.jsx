import React, { useEffect, useState } from "react";
import ModalUser from "../components/TableUser/ModalUser/ModalUser";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deactivateUser, getAllUsers, reactivateUser, getByFilter, orderUsername, orderPoints } from "../redux/users/userActions";
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
    country:'', 
    premium:'', 
    state: '', 
    authorization:''
  })
  let allCountries = useSelector(state => state.countriesReducer.allCountries)
  let [order, setOrder] = useState('')
  
  let allUsers = useSelector((state) => state.userReducer.filterUsers)
  const navigate = useHistory()
  let orderCountries = []
  if(allUsers.length){
    let countries = allUsers.map(user => user.country)
    orderCountries = countries.filter( (ele,pos)=>countries.indexOf(ele) == pos).sort();
    // console.log('country', orderCountries)
  }
  // console.log('allUsers', allUsers)
  
  // useEffect(() => {
  //     // console.log('entro')
  //     dispatch(getAllUsers())
  // },[dispatch])
   
  // console.log('input', inputFilter)
  const getUserEdit = (id) => {
    navigate.push(`/edit-user/${id}`)
  };
  
  const deleteUser = (id) => {
      
      dispatch(deactivateUser(id))
      .then(result =>{ 
        alert(result.Request)
        // dispatch(getAllUsers())
        dispatch(getByFilter(inputFilter))
      })
      .catch(result => alert(result.Error))
      
    };
  
  const activateUser = (id) => {
      //console.log("id", id)
      dispatch(reactivateUser(id))
      .then(result =>{ 
        alert(result.Request)
        // dispatch(getAllUsers())
        dispatch(getByFilter(inputFilter))
      })
      .catch(result => alert(result.Error))
    };

  function handleSelectPremium(event){
    setInputFilter({
        ...inputFilter,
        premium: event.target.value
    })
  }
  function handleSelectState(event){
    setInputFilter({
        ...inputFilter,
        state: event.target.value
    })
  }
  function handleSelectAuthorization(event){
    setInputFilter({
        ...inputFilter,
        authorization: event.target.value
    })
  }
  function handleSelectCountry(event){
    
    setInputFilter({
        ...inputFilter,
        country: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
      dispatch(getByFilter(inputFilter))
      
  }

  function handleClick(){
    dispatch(getAllUsers())
  }

  function handleOrderUser(event){
    dispatch(orderUsername(event.target.value))
    setOrder(event.target.value + 'user')
  }

  function handleOrderPoints(event){
    dispatch(orderPoints(event.target.value))
    setOrder(event.target.value + 'point')
  }

  
  
    
    
  return (
    <div className="md:max-w-8xl md:mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <button className="ml-1 text-2xl font-bold text-black hover:text-blue-600"
          onClick={handleClick}>
            All Users
          </button>
          <div className="flex items-center justify-between flex-col  ">
          <form onSubmit={handleSubmit}
          className="flex items-center justify-between flex-col ">
          <select
                  id="countries"
                  className="text-xs mr-2 h-7 border border-gray-300 text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/3 w-fit "
                  onChange={event => handleSelectCountry(event)}
                  defaultValue='Choose a country'
                >
                  <option disabled='Choose a country'>Choose a country</option>
                  <option value='all'>All</option>
                  {orderCountries.length>0 && orderCountries.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                  ))} 
          </select> 
          <div className="flex items-center justify-evenly flex-row">

          <select
                  id="userType"
                  className="text-xs h-7 border border-gray-300 text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 w-fit "
                  onChange={handleSelectPremium}
                  defaultValue='Type user'
                >
                  <option disabled='Type user'>Type user</option>
                  <option value='all'>All</option>
                  <option value='true'>Premium</option>
                  <option value='false'>Normal</option>
          </select>
          <select
                  id="state"
                  className="text-xs h-7 border border-gray-300 text-base  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 w-fit"
                  onChange={handleSelectState}
                  defaultValue='State'
                >
                  <option disabled='State'>State</option>
                  <option value='all'>All</option>
                  <option value='true'>Active</option>
                  <option value='false'>Blocked</option>
          </select>
          <select
                  id="Authorization"
                  className="text-xs h-7 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 w-fit"
                  onChange={handleSelectAuthorization}
                  defaultValue='Authorization'
                >
                  <option disabled='Authorization'>Authorization</option>
                  <option value='all'>All</option>
                  <option value='Pro-Admin'>Pro-Admin</option>
                  <option value='Community-Admin'>Community-Admin</option>
                  <option value='Enterprise-Admin'>Enterprise-Admin</option>
                  <option value='User'>User</option>
                  
            </select>
          </div>
            
            <div className="flex flex-row items-center mt-1 inline justify-center">
                <input
                  type="submit"
                  className="bg-blue-500 items-center text-white h-7 text-xs font-medium px-6  w-fit mt-px rounded cursor-pointer"
                  value="Search"
                />
             </div>
            
               
          </form>
          
          
          </div>
              
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr className="text-left">
            <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
            E-mail
              </th>
            <th className="px-6 py-3 text-center text-gray-500 font-bold tracking-wider uppercase text-xs">
            <select
                  id="order"
                  className="text-xs h-5 block "
                  onChange={handleOrderUser}
                  defaultValue='USERNAME'
                >
                  <option disabled='USERNAME'>USERNAME</option>
                  <option value='asc'>USER (a-z)</option>
                  <option value='des'>USER (z-a)</option>
            </select>
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
              <select
                  id="orderPoints"
                  className="text-xs h-5 block "
                  onChange={handleOrderPoints}
                  defaultValue='POINTS'
                >
                  <option disabled='POINTS'>POINTS</option>
                  <option value='asc'>POINTS (dsc)</option>
                  <option value='des'>POINTS (asc)</option>
            </select>
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


        {allUsers.length>0 && allUsers.map((user) =>{

            const handleClickInfo = () => {
              setUserInfo(user)
              setModalUser(true)
            }
            return (
            <tr key={user.id} className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 ">
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
                  {user.stats.averageScore}
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
                    onClick={()=>getUserEdit(user.id)}
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
           {allUsers.length<1 && <h1 className="text-center px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xl ">Sin coincidencias 🥶</h1> } 
      </div>

      {modalUser && <ModalUser userInfo={userInfo} setModalUser={setModalUser} />}
    </div>
  );
};

export default Users