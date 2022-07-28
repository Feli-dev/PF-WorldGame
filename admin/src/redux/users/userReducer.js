import {GET_ALL_USERS, GET_BY_COUNTRIES } from "../../types";

let initialState = {
  users: [],
  last: [],
  filterUsers: []

};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      // console.log('reducer')
      
      return {
        ...state,
        users: action.payload.Request,
        last: action.payload.Request.length>5? action.payload.Request.slice(action.payload.Request.length-5):action.payload.Request,
        filterUsers: action.payload.Request
        
      };

    case GET_BY_COUNTRIES:

    return{
      ...state,
      filterUsers: action.payload.Request
    }
    
      
    
    default:
      return state;
  }
}

export default userReducer;