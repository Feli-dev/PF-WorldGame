import {GET_ALL_USERS, GET_BY_FILTERED, ORDER_NAME, ORDER_POINTS } from "../../types";

let initialState = {
  users: [],
  last: [],
  filterUsers: []

};



function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      let actualUser = JSON.parse(localStorage.getItem("profile"))
      let allUsers = action.payload.Request.filter(user => user.id !== actualUser.id)
      let lastFive = allUsers.length>5? allUsers.slice(allUsers.length-5):allUsers
      console.log('last', actualUser)
      return {
        ...state,
        users: allUsers,
        last: lastFive.reverse(),
        filterUsers: allUsers
        
      };

    case GET_BY_FILTERED:
      // console.log('reducer')
    return{
      ...state,
      filterUsers: Array.isArray(action.payload.Request)? action.payload.Request : []
    }

    case ORDER_NAME:
      let orderName = action.payload === 'asc' ? 
      state.filterUsers.sort(function (a, b){
         if (a.username > b.username){return 1};
         if (b.username > a.username){return -1};
         return 0;
     }) :
     state.filterUsers.sort(function(a, b){
         if (a.username > b.username){return -1};
         if (b.username > a.username){return 1};
         return 0;
     })
     return{
      ...state,
      filterUsers: orderName
     }

     case ORDER_POINTS:
      let orderPoints = action.payload === 'asc' ? 
           
      state.filterUsers.sort(function (a, b){  
       return b.stats.averageScore - a.stats.averageScore;
      }) :
      state.filterUsers.sort(function(a, b){
        return a.stats.averageScore - b.stats.averageScore;
      })
      return {
        ...state,
      filterUsers: orderPoints
      } 

    
      
    
    default:
      return state;
  }
}

export default userReducer;