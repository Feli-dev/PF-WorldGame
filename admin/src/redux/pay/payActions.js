import clienteAxios from '../../config/axios'


import { GET_ALL_PAYS } from '../../types' 

export function getPays(){
    
    return async function(dispatch){
        let {data} = (await clienteAxios.get('/Pays/'))
        // console.log('Action', allUsers)
        dispatch({
          type: GET_ALL_PAYS,
          payload: data
        })
    }
}