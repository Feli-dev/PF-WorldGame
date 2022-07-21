import { type } from "../actions/types"


const initialState = {
    game: [],
    countries: [],
    countrie:{},
    users: [],
    login:[],
    attemps:[],
    userdetail: {}
}



export const rootReducer=(state=initialState, action)=>{
    switch (action.type){
        case type.GET_GAME:
            return{
                ...state,
                game: action.payload,
            }
        case type.GET_USER:
            return{
                ...state,
                userdetail: action.payload,
            }
        case type.GET_ALL_USER:
            return{
                ...state,
                users:action.payload
            }
        case type.GET_LOGIN:
            return{
                ...state,
                login:action.payload
            }
        case type.PUT_USER:
             return{
                ...state,
                user: action.payload
            }
        case type.FILTER_BY_COUNTRY:
            const all = state.users
            const filCountry = all.filter(el=> el.country === action.payload)
            return{
                ...state,
                users: filCountry,
            }
        case type.SORTED_BY_POINTS:
            const sortedpoints= action.payload === 'asc' ?
            state.users.sort(function (a, b) {
                return parseInt(a.points) - parseInt(b.points);
            }) :
            state.users.sort(function (a, b) {
                return parseInt(b.points) - parseInt(a.points);
            })
            return{
                ...state,
                users: sortedpoints,
            }
        case type.GET_COUNTRIES:
            return{
                ...state,
                countrie: action.payload,
            }
        case type.GET_ALL_COUNTRIES:
            return{
                ...state,
                countries:action.payload
            }
        case type.CALL_GAME_ACTIONS:
            return{
                ...state,
                attemps:[...attemps, action.payload]
            }
        default:{
            return state;
        }
        }
                
}
