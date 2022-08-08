import React from "react";

// Redux
import { useSelector } from "react-redux";

const Game = ({ game, setModalUser, setUserInfo }) => {
  let allUsers = useSelector((state) => state.userReducer.users);

  let user = allUsers?.filter((u) => u.id === game.UserId);

  const handleClickInfo = () => {
    setUserInfo(user[0]);
    setModalUser(true);
  };

  return (
    <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 ">
      <td className="border-t">
        <span className="text-gray-700 px-11 py-4 flex items-center font-bold">
          {game?.id}
        </span>
      </td>

      <td className="border-t">
        <span className="text-gray-700 px-8 py-4 flex items-center  ">
          <div
            className=" cursor-pointer font-semibold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
            onClick={handleClickInfo}
          >
            {user[0]?.username.charAt(0).toUpperCase()}
          </div>
        </span>
      </td>

      <td className="border-t">
        <span className="text-gray-700 px-7 py-4 flex items-center font-semibold">
          {user[0]?.username}
        </span>
      </td>

      <td className="border-t">
        <span className="text-gray-700 px-6 py-4 flex items-center">
          {game?.countrie}
        </span>
      </td>

      <td className="border-t">
        <span className="text-gray-700 px-11 py-4 flex items-center">
          {game?.attempts}
        </span>
      </td>

      <td className="border-t">
        <span className="px-6 py-4 flex items-center">
          {game?.winned === true ? (
            <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">
              True
            </span>
          ) : (
            <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
              False
            </span>
          )}
        </span>
      </td>

      <td className="border-t">
        <span className="text-gray-700 px-6 py-4 flex items-center ml-3">
          {game?.points}
        </span>
      </td>
    </tr>
  );
};

export default Game;
