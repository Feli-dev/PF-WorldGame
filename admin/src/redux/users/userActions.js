import clienteAxios from '../../config/axios'


import { GET_ALL_USERS, GET_BY_COUNTRIES } from '../../types' 

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
    console.log(created);
    return created;
  };
}

export function getUser(id) {
  return async function () {
    let { data } = await clienteAxios.get(`/User/${id}`);
    return data.Request;
  };
}

// export function getByCountries(country){
//     return async function(dispatch){
//         let usersByCountries = await clienteAxios.get(`/User?countrie=${country}`)
//         dispatch({
//             type: GET_BY_COUNTRIES,
//             payload: usersByCountries
//         })
//     }
// }
