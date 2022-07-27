import clienteAxios from '../../config/axios'


import { GET_ALL_COUNTRIES } from '../../types' 

export function getAllCountries(){
    
    return async function(dispatch){
        let allCountries = (await clienteAxios.get('/countries/')).data
        // console.log('Action', allCountries)
            dispatch({
            type: GET_ALL_COUNTRIES,
            payload: allCountries
        })
    }
}