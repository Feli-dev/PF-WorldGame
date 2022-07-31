import {GET_ALL_PAYS } from "../../types";

let initialState = {
  pays: [],
  

};



function payReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PAYS:
    let allPays = action.payload.filter(user => user.payment !== null) 
    return{
        ...state,
        pays: allPays
    }
 
    
    default:
      return state;
  }
}

export default payReducer;