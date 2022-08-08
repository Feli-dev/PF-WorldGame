import clienteAxios from "../../config/axios";

import { GET_ALL_GAMES } from "../types";

export function getAllGames() {
  return async function (dispatch) {
    let allGames = (await clienteAxios.get("/games")).data;
    dispatch({
      type: GET_ALL_GAMES,
      payload: allGames,
    });
  };
}

export function filterGamesWin(string) {
  return function (dispatch) {
    dispatch({
      type: "FILTER_GAMES_BY_WIN",
      payload: string,
    });
  };
}
export function filterGamesAttempts(string) {
  return function (dispatch) {
    dispatch({
      type: "FILTER_GAMES_BY_ATTEMPTS",
      payload: string,
    });
  };
}
export function filterGamesTime(string) {
  return function (dispatch) {
    dispatch({
      type: "FILTER_GAMES_BY_TIME",
      payload: string,
    });
  };
}
export function filterGamesPoints(string) {
  return function (dispatch) {
    dispatch({
      type: "FILTER_GAMES_BY_POINTS",
      payload: string,
    });
  };
}
