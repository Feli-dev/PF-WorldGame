import {GET_ALL_PAYS } from "../../types";

let initialState = {
  pays: [],
  

};



function payReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PAYS:
     
    return{
        ...state,
        pays: Array.isArray(action.payload)? action.payload : []
    }
 
    
    default:
      return state;
  }
}

export default payReducer;