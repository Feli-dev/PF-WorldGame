import { type } from "../actions/types"


const initialState = {
    game: [],
    countrys: [],
    users: [],
    login:[],
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
        default:{
            return state;
        }
        }
                
}
