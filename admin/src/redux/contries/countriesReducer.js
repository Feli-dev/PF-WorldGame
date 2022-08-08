import { GET_ALL_COUNTRIES } from "../types";

let initialState = {
  allCountries: [],
};

function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      let orderCountries = action.payload.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        allCountries: orderCountries,
      };

    default:
      return state;
  }
}

export default countriesReducer;
