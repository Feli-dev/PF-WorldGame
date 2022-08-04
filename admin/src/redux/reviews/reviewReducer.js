import {GET_ALL_REVS, GET_BY_REVFILTER } from "../types";

let initialState = {
  reviews: [],
  filterRevs:[]

};



function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REVS:
    let allRevs = action.payload
     
    return{
        ...state,
        reviews: allRevs,
        
    }

    case GET_BY_REVFILTER:
      console.log('reduer', action.payload)
      return{
        ...state,
        reviews : action.payload
      }
 
    
    default:
      return state;
  }
}

export default reviewReducer;