import React, { useState } from "react";
import ModalUser from "../components/TableUser/ModalUser/ModalUser";
import UserGraph from "../components/Graphs/UserGraph";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deactivateUser,
  getAllUsers,
  reactivateUser,
  getByFilter,
  orderUsername,
  orderPoints,
  searchUsers
} from "../redux/users/userActions";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Users = () => {
  const dispatch = useDispatch();
  const [modalUser, setModalUser] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [inputFilter, setInputFilter] = useState({
    country: "",
    premium: "",
    state: "",
    authorization: "",
  });
  const [inputSearch, setInputSearch] = useState()


  let [order, setOrder] = useState(""); //eslint-disable-line
  let actualUser = JSON.parse(localStorage.getItem("profile"));
  const [filter, setFilter] = useState(false);

  //console.log("chee", actualUser)

  let allUsers = useSelector((state) => state.userReducer.filterUsers);
  const navigate = useHistory();
  let orderCountries = [];
  if (allUsers.length) {
    let countries = allUsers.map((user) => user.country);
    orderCountries = countries
      .filter((ele, pos) => countries.indexOf(ele) === pos)
      .sort();
  }

  const getUserEdit = (id) => {
    navigate.push(`/edit-user/${id}`);
  };

  const deleteUser = (id) => {
    dispatch(deactivateUser(id))
      .then((result) => {
        alert(result.Request);
        // dispatch(getAllUsers())
        dispatch(getByFilter(inputFilter));
      })
      .catch((result) => alert(result.Error));
  };

  const activateUser = (id) => {
    dispatch(reactivateUser(id))
      .then((result) => {
        alert(result.Request);
        // dispatch(getAllUsers())
        dispatch(getByFilter(inputFilter));
      })
      .catch((result) => alert(result.Error));
  };

  function handleSelectPremium(event) {
    setInputFilter({
      ...inputFilter,
      premium: event.target.value,
    });
  }
  function handleSelectState(event) {
    setInputFilter({
      ...inputFilter,
      state: event.target.value,
    });
  }
  function handleSelectAuthorization(event) {
    setInputFilter({
      ...inputFilter,
      authorization: event.target.value,
    });
  }
  function handleSelectCountry(event) {
    setInputFilter({
      ...inputFilter,
      country: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByFilter(inputFilter));
  };

  function handleReset() {
    dispatch(getAllUsers());
    setInputFilter({
      country: "",
      premium: "",
      state: "",
      authorization: "",
    });
  }

  function handleOrderUser(event) {
    dispatch(orderUsername(event.target.value));
    setOrder(event.target.value + "user");
  }

  function handleOrderPoints(event) {
    dispatch(orderPoints(event.target.value));
    setOrder(event.target.value + "point");
  }

  function handleSearchSubmit(event){
    event.preventDefault()
    dispatch(searchUsers(inputSearch))
  }
  

  return (
    <div className="md:max-w-8xl md:mx-auto px-4 py-7 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <button
          className="text-2xl font-bold text-black hover:text-blue-600"
          onClick={handleReset}
        >
          All Users
        </button>
      </div>
      <div className="flex mb-4 w-full items-center flex-col lg:flex-row">
        <label className="font-semibold py-1 hidden lg:block mr-4">
          Filters:
        </label>
        <button
          onClick={() => setFilter(!filter)}
          className={
            !filter
              ? "lg:hidden w-full mb-2 text-white bg-blue-600 rounded-lg text-sm px-4 py-2 inline-flex items-center"
              : "lg:hidden w-full mb-7 text-white bg-blue-600 rounded-lg text-sm px-4 py-2 inline-flex items-center"
          }
        >
          Filters <ArrowDropDownIcon />
        </button>
        <form
          onSubmit={handleSubmit}
          className={
            filter
              ? "flex flex-col gap-2 lg:flex-none lg:flex-row w-full lg:w-max"
              : "flex-col gap-2 lg:flex-none lg:flex-row w-full hidden lg:flex lg:w-max"
          }
        >
          <select
            id="countries"
            className="mx-2 p-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            onChange={(event) => handleSelectCountry(event)}
            defaultValue="Choose a country"
          >
            <option disabled="Choose a country">Choose a country</option>
            <option value="all">All</option>
            {orderCountries.length > 0 &&
              orderCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
          </select>

          <select
            id="userType"
            className="mx-2 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={handleSelectPremium}
            defaultValue="Type user"
          >
            <option disabled="Type user">Type user</option>
            <option value="all">All</option>
            <option value="true">Premium</option>
            <option value="false">Normal</option>
          </select>
          <select
            id="state"
            className="mx-2 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={handleSelectState}
            defaultValue="State"
          >
            <option disabled="State">State</option>
            <option value="all">All</option>
            <option value="true">Active</option>
            <option value="false">Blocked</option>
          </select>
          <select
            id="Authorization"
            className="mx-2 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={handleSelectAuthorization}
            defaultValue="Authorization"
          >
            <option disabled="Authorization">Authorization</option>
            <option value="all">All</option>
            <option value="Pro-Admin">Pro-Admin</option>
            <option value="Community-Admin">Community-Admin</option>
            <option value="Enterprise-Admin">Enterprise-Admin</option>
            <option value="User">User</option>
          </select>

          <input
            type="submit"
            className="cursor-pointer bg-transparent hover:bg-green-700 text-blue-700 font-semibold hover:text-white px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
            value="Filter"
          />
          <button
            type="reset"
            onClick={handleReset}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
          >
            Reset filters
          </button>
        </form>
      </div>
      <div className="flex mb-5 w-full items-center flex-col lg:flex-row">
        <input type="search" onChange={(e) => setInputSearch(e.target.value)}
        className="rounded p-1 mb-3 lg:mb-0"
        placeholder="Search by username"
        ></input>
        <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 py-1 mx-2 my-0 border border-blue-500 hover:border-transparent rounded"
        onClick={handleSearchSubmit}
        >Search</button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow max-h-96">
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
                  defaultValue="USERNAME"
                >
                  <option disabled="USERNAME">USERNAME</option>
                  <option value="asc">USER (a-z)</option>
                  <option value="des">USER (z-a)</option>
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
                  defaultValue="POINTS"
                >
                  <option disabled="POINTS">POINTS</option>
                  <option value="asc">POINTS (dsc)</option>
                  <option value="des">POINTS (asc)</option>
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
            {allUsers.length > 0 &&
              allUsers.map((user) => {
                const handleClickInfo = () => {
                  setUserInfo(user);
                  setModalUser(true);
                };
                return (
                  <tr
                    key={user.id}
                    className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 "
                  >
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
                        {user.createdAt.slice(0, 10)}
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
                        {user.premium === true ? "Premium" : "Normal"}
                      </span>
                    </td>

                    <td className="border-t">
                      <span className="px-6 py-4 flex items-center">
                        {user.state === true ? (
                          <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">
                            Active
                          </span>
                        ) : (
                          <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                            blocked
                          </span>
                        )}
                      </span>
                    </td>

                    <td className="border-t">
                      <span className="text-gray-700 px-6 py-4 flex items-center">
                        {user.authorization}
                      </span>
                    </td>

                    <td className="border-t">
                      {user.id !== actualUser.id ? (
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
                      ) : (
                        "..."
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {allUsers.length < 1 && (
          <h1 className="text-center px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xl ">
            Sin coincidencias 🥶
          </h1>
        )}
      </div>

      {modalUser && (
        <ModalUser userInfo={userInfo} setModalUser={setModalUser} />
      )}

      <h1 className="text-center px-6 pt-3 mb-4 mt-2 text-gray-500 font-bold tracking-wider uppercase text-xl ">
        Monthly new users
      </h1>
      <div className="bg-white p-5 lg:p-10 h-96 rounded-lg">
        <UserGraph />
      </div>
    </div>
  );
};

export default Users;
