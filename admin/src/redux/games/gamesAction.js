import clienteAxios from '../../config/axios'


import { GET_ALL_GAMES } from '../../types' 

export function getAllGames(){
    
    return async function(dispatch){
        let allGames = (await clienteAxios.get('/games')).data
         console.log('accioons', allGames)
            dispatch({
            type: GET_ALL_GAMES,
            payload: allGames
        })
    }
}