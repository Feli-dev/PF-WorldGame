import React, { useEffect, useState } from "react";
import ModalUser from "../components/TableUser/ModalUser/ModalUser";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../redux/games/gamesAction";
//import { getAllUsers } from "../redux/users/userActions";
import { filterGamesWin, filterGamesAttempts, filterGamesPoints, filterGamesTime } from "../redux/games/gamesAction";

// Icons




const Games = () => {
    const dispatch = useDispatch()
    const [modalUser, setModalUser] = useState(false);
    const [userInfo, setUserInfo] = useState({})
    const [input, setInput] = useState({
      winned:'', 
      attempts:'', 
      time: '', 
      points:''
    })
    let allGames = useSelector((state) => state.gamesReducer.allGames)
    let allUsers = useSelector((state) => state.userReducer.users)
    
    // useEffect(() => {
    //     console.log('entro')
    //     dispatch(getAllGames())
    //     dispatch(getAllUsers())
    //   },[])

    let numeritos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    function handleSubmit(event){
      //console.log("aber", input)
      event.preventDefault()
      dispatch(filterGamesWin(input.winned))
      dispatch(filterGamesAttempts(input.attempts))
      dispatch(filterGamesPoints(input.points))
      dispatch(filterGamesTime(input.time))
    }
    function resetFilters(){
      
      dispatch(getAllGames())
      setInput({
        winned:'', 
        attempts:'', 
        time: '', 
        points:''
      })
    }

    function handleSelect(event){
      setInput({
        ...input,
        [event.target.name]: event.target.value
      })
      //console.log("aber", input)
    }

    let claseSelect = "mx-2 px-3 rounded"
      
  return (
    <div className="md:max-w-7xl md:mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4 ml-2">
            <h2 className="text-2xl font-bold text-gray-800">Games</h2>
        </div>
    <div className="flex mb-4 ml-2 max-w-2x1">
      <label className="font-semibold">Filters:</label>
      <form>
      <select name="winned" onChange={e => handleSelect(e)} className={claseSelect}>
                <option selected value="">Winned</option>
                <option value="true">True</option>
                <option value="false">False</option>
        </select>  
        <select name="attempts" onChange={e => handleSelect(e)} className={claseSelect}>
        <option selected value="">Attempts</option>
              {numeritos.map((e)=>{ return (
                <option value = {e}>{e}</option>
              )})}
        </select> 
        <select name="time" onChange={e => handleSelect(e)} className={claseSelect}>
        <option selected value="">Time</option>
              {numeritos.map((e)=>{ return (
                <option value = {e}>{e}</option>
              )})}
        </select> 
        <select name="points" onChange={e => handleSelect(e)} className={claseSelect}>
                <option selected value="" >Points</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>
        <button type="submit" onClick={e => handleSubmit(e)}
        className="bg-transparent hover:bg-green-700 text-blue-700 font-semibold hover:text-white px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
        >Filter</button>
        <button type="reset" onClick={() => resetFilters()}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
        >Reset filters</button>
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


        {allGames && allGames.map((game) =>{

        let user = allUsers.filter((u) => u.id === game.UserId)
        //console.log("aberche", user)
            

            const handleClickInfo = () => {
              setUserInfo(user[0])
              setModalUser(true)
            }
            return (
            <tr className="focus-within:bg-gray-200 overflow-hidden hover:bg-gray-100 ">
            

            <td className="border-t">
                <span className="text-gray-700 px-11 py-4 flex items-center font-bold">
                  {game.id}
                </span>
              </td>  
              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center font-semibold">
                  {user[0].username}
                </span>
              </td> 

              <td className="border-t">
                <span className="text-gray-700 px-8 py-4 flex items-center  ">
                  <div
                    className=" cursor-pointer font-semibold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full"
                    onClick={handleClickInfo}
                  >
                    {user[0].username.charAt(0).toUpperCase()}
                  </div>
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center">
                    {game.countrie}
                </span>
              </td>
              
              <td className="border-t">
                <span className="text-gray-700 px-8 py-4 flex items-center ">
                {game.time}
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-11 py-4 flex items-center">
                {game.attempts}
                </span>
              </td>

              <td className="border-t">
                <span className="px-6 py-4 flex items-center">
                {game.winned === true ? 
                    (<span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800">
                    True
                    </span>)
                    :(
                    <span className="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800">
                    False
                  </span>)}
                </span>
              </td>

              <td className="border-t">
                <span className="text-gray-700 px-6 py-4 flex items-center ml-3">
                  {game.points}
                </span>
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

export default Games