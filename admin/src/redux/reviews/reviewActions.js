import clienteAxios from "../../config/axios";

import { GET_ALL_REVS, GET_BY_REVFILTER } from "../types";

export function getRevs() {
  return async function (dispatch) {
    let { data } = await clienteAxios.get("/review");
    dispatch({
      type: GET_ALL_REVS,
      payload: data,
    });
  };
}

export function filterRev(filter) {
  return async function (dispatch) {
    let { data } = await clienteAxios.get(
      `/review?filter=${filter}`
    );
      
    dispatch({
      type: GET_BY_REVFILTER,
      payload: data,
    });
  };
}

export function unreadReview(id) {
  return async function () {
    let accions = await clienteAxios.delete(``);

    return accions.data;
  };
}

export function readReview(id) {
  return async function () {
    let deact = await clienteAxios.delete(``);
    return deact.data;
  };
}
