import clienteAxios from '../../config/axios'


import { GET_ALL_USERS } from '../../types' 

export function getAllUsers(){
    
    return async function(dispatch){
        let allUsers = (await clienteAxios.get('/User/')).data
        console.log('Action', allUsers)
            dispatch({
            type: GET_ALL_USERS,
            payload: allUsers
        })
    }
}