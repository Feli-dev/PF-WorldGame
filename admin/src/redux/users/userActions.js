import clienteAxios from '../../config/axios'


import { GET_ALL_USERS } from '../../types' 

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

export function deactivateUser(id){
    return async function(){ 
    //console.log("ENTRÓ A ACCION")
    let accions = await clienteAxios.delete(`/user/recycle/${id}`)
    //console.log("ACCION DESACTIVADORA:", accions.data)
    return accions.data
    }
}

export function reactivateUser(id){
    return async function(){
        let deact = await clienteAxios.delete(`/user/restore/${id}`)
        return deact.data
    }
}

