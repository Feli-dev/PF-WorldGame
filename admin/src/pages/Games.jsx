import React, { useState } from "react";
import ModalUser from "../components/TableUser/ModalUser/ModalUser";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../redux/games/gamesAction";
//import { getAllUsers } from "../redux/users/userActions";
import {
  filterGamesWin,
  filterGamesAttempts,
  filterGamesPoints,
} from "../redux/games/gamesAction";
import Game from "../components/Game";

// Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Games = () => {
  const dispatch = useDispatch();
  const [modalUser, setModalUser] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [input, setInput] = useState({
    winned: "",
    attempts: "",
    points: "",
  });
  const [filter, setFilter] = useState(false);

  let allGames = useSelector((state) => state.gamesReducer.allGames);

  let numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(filterGamesWin(input.winned));
    dispatch(filterGamesAttempts(input.attempts));
    dispatch(filterGamesPoints(input.points));
    //dispatch(filterGamesTime(input.time));
  }
  function resetFilters() {
    dispatch(getAllGames());
    setInput({
      winned: "",
      attempts: "",
      points: "",
    });
  }

  function handleSelect(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  let claseSelect = "mx-2 p-1 rounded";

  return (
    <div className="md:max-w-7xl md:mx-auto px-4 py-7 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <button
          className="text-2xl font-bold text-black hover:text-blue-600"
          onClick={() => resetFilters()}
        >
          All Games
        </button>
      </div>
      <div className="flex mb-7 w-full items-center flex-col lg:flex-row">
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
          className={
            filter
              ? "flex flex-col gap-2 lg:flex-none lg:flex-row w-full lg:w-max"
              : "flex-col gap-2 lg:flex-none lg:flex-row w-full hidden lg:flex lg:w-max"
          }
        >
          <select
            name="winned"
            onChange={(e) => handleSelect(e)}
            className="p-2 lg:p-2 rounded w-full lg:w-max lg:mx-2"
          >
            <option selected value="">
              Winned
            </option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <select
            name="attempts"
            onChange={(e) => handleSelect(e)}
            className="p-2 rounded w-full lg:w-max lg:p-2 lg:mx-2"
          >
            <option selected value="">
              Attempts
            </option>
            {numeritos?.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
          <select
            name="points"
            onChange={(e) => handleSelect(e)}
            className="p-2 rounded w-full lg:w-max lg:p-2 lg:mx-2"
          >
            <option selected value="">
              Points
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="bg-transparent hover:bg-green-700 text-blue-700 font-semibold hover:text-white px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
          >
            Search
          </button>
          <button
            type="reset"
            onClick={() => resetFilters()}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
          >
            Reset filters
          </button>
        </form>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow max-h-screen">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Game ID
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                User Info
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Username
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Country
              </th>

              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Attempts
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Winned?
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {allGames?.length > 0 &&
              allGames?.map((game) => (
                <Game
                  game={game}
                  setModalUser={setModalUser}
                  setUserInfo={setUserInfo}
                />
              ))}
          </tbody>
        </table>
        {allGames?.length < 1 && (
          <h1 className="text-center px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xl ">
            Sin Games 🥶
          </h1>
        )}
      </div>

      {modalUser && (
        <ModalUser userInfo={userInfo} setModalUser={setModalUser} />
      )}
    </div>
  );
};

export default Games;
