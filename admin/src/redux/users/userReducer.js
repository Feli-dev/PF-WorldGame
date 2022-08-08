import {
  GET_ALL_USERS,
  GET_BY_FILTERED,
  ORDER_NAME,
  ORDER_POINTS,
  SEARCH_USERS
} from "../types";

let initialState = {
  users: [],
  last: [],
  filterUsers: [],
  totalUsers: 0,
  totalPremium: 0
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:

      // let actualUser = JSON.parse(localStorage.getItem("profile"));
      // let allUsers = action.payload.Request.filter(
      //   (user) => user.id !== actualUser.id
      // );
      let lastFive = action.payload.Request.length>5? action.payload.Request.slice(action.payload.Request.length-5):action.payload.Request
      let premium = action.payload.Request.filter((user) => user.premium).length
      return {
        ...state,
        users: action.payload.Request,
        last: lastFive.reverse(),
        filterUsers: action.payload.Request,
        totalUsers: action.payload.Request.length,
        totalPremium: premium
      };

    case GET_BY_FILTERED:
      return {
        ...state,
        filterUsers: Array.isArray(action.payload.Request)
          ? action.payload.Request
          : [],
      };

    case ORDER_NAME:
      let orderName =
        action.payload === "asc"
          ? state.filterUsers.sort(function (a, b) {
              if (a.username > b.username) {
                return 1;
              }
              if (b.username > a.username) {
                return -1;
              }
              return 0;
            })
          : state.filterUsers.sort(function (a, b) {
              if (a.username > b.username) {
                return -1;
              }
              if (b.username > a.username) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filterUsers: orderName,
      };

    case ORDER_POINTS:
      let orderPoints =
        action.payload === "asc"
          ? state.filterUsers.sort(function (a, b) {
              return b.stats.averageScore - a.stats.averageScore;
            })
          : state.filterUsers.sort(function (a, b) {
              return a.stats.averageScore - b.stats.averageScore;
            });
      return {
        ...state,
        filterUsers: orderPoints,
      };
    case SEARCH_USERS:
      let input = action.payload?.toLowerCase()
      let searched = state.users?.filter((us) =>{
        return us.username.includes(input)
      })
      return {
        ...state,
        filterUsers: searched
      }


    default:
      return state;
  }
}

export default userReducer;
