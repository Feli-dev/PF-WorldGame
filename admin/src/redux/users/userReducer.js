import {GET_ALL_USERS } from "../../types";

let initialState = {
  users: [],

};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      console.log('reducer', state.users)  
      return {
        ...state,
        users: action.payload,
        
      };
    
    default:
      return state;
  }
}

export default userReducer;