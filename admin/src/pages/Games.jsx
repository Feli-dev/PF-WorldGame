import React, { useState } from "react";
import ModalUser from "../components/TableUser/ModalUser/ModalUser";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../redux/games/gamesAction";
//import { getAllUsers } from "../redux/users/userActions";
import {
  filterGamesWin,
  filterGamesAttempts,
  filterGamesPoints,
  filterGamesTime,
} from "../redux/games/gamesAction";
import Game from "../components/Game";

// Icons

const Games = () => {
  const dispatch = useDispatch();
  const [modalUser, setModalUser] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [input, setInput] = useState({
    winned: "",
    attempts: "",
    time: "",
    points: "",
  });
  let allGames = useSelector((state) => state.gamesReducer.allGames);

  let numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(filterGamesWin(input.winned));
    dispatch(filterGamesAttempts(input.attempts));
    dispatch(filterGamesPoints(input.points));
    dispatch(filterGamesTime(input.time));
  }
  function resetFilters() {
    dispatch(getAllGames());
    setInput({
      winned: "",
      attempts: "",
      time: "",
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
    <div className="md:max-w-7xl md:mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4 ml-2">
        <button
          className="text-2xl font-bold text-black hover:text-blue-600"
          onClick={() => resetFilters()}
        >
          Games
        </button>
      </div>
      <div className="flex mb-4 ml-2 max-w-2x1 items-center">
        <label className="font-semibold py-1">Filters:</label>
        <form>
          <select
            name="winned"
            onChange={(e) => handleSelect(e)}
            className={claseSelect}
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
            className={claseSelect}
          >
            <option selected value="">
              Attempts
            </option>
            {numeritos?.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
          <select
            name="time"
            onChange={(e) => handleSelect(e)}
            className={claseSelect}
          >
            <option selected value="">
              Time
            </option>
            {numeritos?.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
          <select
            name="points"
            onChange={(e) => handleSelect(e)}
            className={claseSelect}
          >
            <option selected value="">
              Points
            </option>
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
          {/*     <button
            type="reset"
            onClick={() => resetFilters()}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
          >
            Reset filters
          </button> */}
        </form>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full whitespace-no-wrap bg-white overflow-hidden table-striped">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Game ID
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                User
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                User Info
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Country
              </th>
              <th className="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs">
                Time
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
            {allGames.length > 0 &&
              allGames?.map((game) => (
                <Game
                  game={game}
                  setModalUser={setModalUser}
                  setUserInfo={setUserInfo}
                />
              ))}
          </tbody>
        </table>
      </div>

      {modalUser && (
        <ModalUser userInfo={userInfo} setModalUser={setModalUser} />
      )}
    </div>
  );
};

export default Games;
