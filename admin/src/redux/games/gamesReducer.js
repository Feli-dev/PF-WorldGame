import { GET_ALL_GAMES } from "../types";

let initialState = {
  allGames: [],
};

function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
      };
    case "FILTER_GAMES_BY_WIN":
      return {
        ...state,
        allGames: action.payload
          ? state.allGames.filter(
              (el) => el.winned.toString() === action.payload
            )
          : state.allGames,
      };
    case "FILTER_GAMES_BY_ATTEMPTS":
      return {
        ...state,
        allGames: action.payload
          ? state.allGames.filter((el) => el.attempts == action.payload)
          : state.allGames,
      };
    case "FILTER_GAMES_BY_TIME":
      return {
        ...state,
        allGames: action.payload
          ? state.allGames.filter((el) => el.time == action.payload)
          : state.allGames,
      };
    case "FILTER_GAMES_BY_POINTS":
      return {
        ...state,
        allGames: action.payload
          ? state.allGames.filter(
              (el) => Math.floor(el.points) == action.payload
            )
          : state.allGames,
      };
    default:
      return state;
  }
}

export default gamesReducer;
