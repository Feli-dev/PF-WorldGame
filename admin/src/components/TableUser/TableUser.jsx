import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/users/userActions";
import { Link } from "react-router-dom";

//Components
import ModalUser from "./ModalUser/ModalUser";

import DashUser from "./user/DashUser";
import { getAllGames } from "../../redux/games/gamesAction";

const TableUser = () => {
  const [modalUser, setModalUser] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  let dispatch = useDispatch();
  let lastUsers = useSelector((state) => state.userReducer.last);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllGames());
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Latest Users</h2>

        <Link
          to={"/users"}
          className="text-blue-600 hover:text-blue-500 font-medium"
        >
          See all
        </Link>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped ">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Profile
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Username
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

          {lastUsers.length > 0 && (
            <tbody className=" max-h-max border-solid border-2 overflow-y-auto">
              {lastUsers.map((user) => (
                <DashUser
                  key={user.id}
                  user={user}
                  setModalUser={setModalUser}
                  setUserInfo={setUserInfo}
                />
              ))}
            </tbody>
          )}
        </table>
        {lastUsers.length < 1 && (
          <h1 className="text-center px-4 py-3 text-gray-500 font-bold tracking-wider uppercase text-xl">
            Sin usuarios registrados... aún 🥶
          </h1>
        )}
      </div>

      {modalUser && (
        <ModalUser userInfo={userInfo} setModalUser={setModalUser} />
      )}
    </>
  );
};

export default TableUser;
