import {GET_ALL_COUNTRIES } from "../../types";

let initialState = {
  allCountries: [],
  

};

function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
    //   console.log('reducer')
      return {
        ...state,
        allCountries: action.payload,
      };

    default:
      return state;
  }
}

export default countriesReducer;