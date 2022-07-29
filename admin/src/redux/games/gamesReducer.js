import {GET_ALL_GAMES } from "../../types";

let initialState = {
  allGames: [],
  

};

function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
    //   console.log('reducer')
      return {
        ...state,
        allGames: action.payload,
      };

    default:
      return state;
  }
}

export default gamesReducer;