import axios from 'axios';
import { type } from './types';
import { population, area, coordinates, continent, hemisphere } from './actionsGame';
//--------------------------games----------------------//
export function getGame(id){
    return async function(dispatch){
        try{
            var json = await axios.get("https://world-game-v2.herokuapp.com/games", id)
            return dispatch({
                type: type.GET_GAME,
                payload : json.data,
            })
    }catch(e){
        return e.message
    }
}};

export function PostGame(payload){
    return async function(dispatch){
        try{
            const response = axios.post("https://world-game-v2.herokuapp.com/games", payload)
            return response

        }catch(e){
            return e.message
        }
    }
}

//-------------------------login----------------------------//

export function postLogin(payload){
    return async function(dispatch){
        try{
            var json = await axios.post("https://world-game-v2.herokuapp.com/Login", payload)
            return dispatch({
                type: type.POST_LOGIN,
                payload : json.data,
            })
    }catch(e){
        return e.message
    }
}};

//------------------------user--------------------------//

export function getUser(id){
    return async function(dispatch){
        try{
            if(id){
                var json = await axios.get("https://world-game-v2.herokuapp.com/User/" + id)
            }
            else{
                var json = await axios.get("https://world-game-v2.herokuapp.com/User") 

            }
            return dispatch({
                type: type.GET_USER,
                payload : json.data,
            })
    }catch(e){
        return e.message
    }
}};

export function PutUser(payload){
    return async function(dispatch){
        try{
            var json = await axios.put("https://world-game-v2.herokuapp.com/User", payload)
            return dispatch({
                type: type.PUT_USER,
                payload : json.data,
            })
    }catch(e){
        return e.message
    }
}}; 

export function deleteUser(payload){
    return async function(dispatch){
        try{
            const response = axios.delete(`https://world-game-v2.herokuapp.com/User/delete/recycle/${payload}`)
            return response
        }catch(e){
            return e.message
        }
    }
}
export function restoreUser(payload){
    return async function(dispatch){
        try{
            const response = axios.delete(`https://world-game-v2.herokuapp.com/User/delete/restore/${payload}`)
            return response
        }catch(e){
            return e.message
        }
    }
}
//-----------------------Sorted--------------------------//

export function sortByCountry(payload) {
    return {
        type: type.FILTER_BY_COUNTRY,
        payload,
    }
}

export function sortByWeight(payload) {
    return {
        type: type.SORTED_BY_POINTS,
        payload,
    }
}
//-----------------------friends---------------------//
export function PostFriend(payload){
    return async function(dispatch){
        try{
            const response = axios.post("https://world-game-v2.herokuapp.com/friends", payload)
            return response

        }catch(e){
            return e.message
        }
    }
}
//--------------------countries----------------------//
export function getCountrie(name){
    return async function(dispatch){
        try{
            var json = await axios.get("https://world-game-v2.herokuapp.com/countries",name)
            return dispatch({
                type: type.GET_COUNTRIES,
                payload : json.data,
            })
    }catch(e){
        return e.message
    }
}};

export function getAllCountries(form = false){
    return async function(dispatch){
        try{
            var {data} = await axios.get("https://world-game-v2.herokuapp.com/countries")
            if(!form){ 
            return dispatch({
                type: type.GET_ALL_COUNTRIES,
                payload : data,
            })}
            else {
                var aux = []
                data?.map(e => {aux.push({ label: e.name, value: e.name })})
                return dispatch({
                    type: type.GET_ALL_COUNTRIES,
                    payload : aux,
                })}
            }
     catch(e){
        return e.message
    }
}};

//------------------------game.action------------------//
export function gameAction(country, attempt){
    return function(dispatch){
        try{
            const lastattemp={
                name: attempt.name,
                area: area(country, attempt),
                hemisphere: hemisphere(country, attempt),
                population: population(country, attempt),
                coordinates: coordinates(country, attempt),
                continent: continent(country, attempt)
            }
            return dispatch({
                type: type.CALL_GAME_ACTIONS,
                payload : lastattemp,
            })
    }catch(e){
        return e.message
    }
}};