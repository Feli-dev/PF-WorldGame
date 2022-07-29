import clienteAxios from '../../config/axios'


import { GET_ALL_USERS, GET_BY_FILTERED, ORDER_NAME, ORDER_POINTS } from '../../types' 

export function getAllUsers(){
    
    return async function(dispatch){
        let allUsers = (await clienteAxios.get('/User/')).data
        // console.log('Action', allUsers)
        dispatch({
          type: GET_ALL_USERS,
          payload: allUsers
        })
    }
}

export function deactivateUser(id) {
  return async function () {
    //console.log("ENTRÓ A ACCION")
    let accions = await clienteAxios.delete(`/user/recycle/${id}`);
    //console.log("ACCION DESACTIVADORA:", accions.data)
    return accions.data;
  };
}

export function reactivateUser(id) {
  return async function () {
    let deact = await clienteAxios.delete(`/user/restore/${id}`);
    return deact.data;
  };
}

export function postUser(data) {
  return function (dispatch) {
    let created = clienteAxios.post("/User/", data);
    // console.log(created);
    return created;
  };
}

export function updateUser(updateUser) {
  return async function () {
    let updated = await clienteAxios.put("/User", updateUser);
    return updated;
  };
}

export function getUser(id) {
  return async function () {
    let { data } = await clienteAxios.get(`/User/${id}`);
    return data.Request;
  };
}

export function getByFilter({country, premium, state, authorization}){
    return async function(dispatch){
      let {data}= await clienteAxios.get(`/User?country=${country}&premium=${premium}&state=${state}&authorization=${authorization}`)
      // console.log('filter',data)
        dispatch({
            type: GET_BY_FILTERED,
            payload: data
        })
    }
}

export function orderUsername(order){
  return{
      type: ORDER_NAME,
      payload: order
  }
}

export function orderPoints(order){
  return{
      type: ORDER_POINTS,
      payload: order
  }
}
