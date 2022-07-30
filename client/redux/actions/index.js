import axios from "axios";
import { type } from "./types";
import {
  population,
  area,
  coordinates,
  continent,
  hemisphere,
} from "./actionsGame";
//--------------------------games----------------------//
export function getGame(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://192.168.0.179:3001/games",
        id
      );
      return dispatch({
        type: type.GET_GAME,
        payload: json.data,
      });
    } catch (e) {
      return e.message;
    }
  };
}

export function PostGame(payload) {
  return async function (dispatch) {
    try {
      const response = axios.post(
        "http://192.168.0.179:3001/games",
        payload
      );
      return response;
    } catch (e) {
      return e.message;
    }
  };
}

export function newGame() {
  return {
    type: type.NEW_GAME,
  }
}

//-------------------------login----------------------------//

export function postLogin(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.post(
        "http://192.168.0.179:3001/Login",
        payload
      );
      return dispatch({
        type: type.POST_LOGIN,
        payload: json.data,
      });
    } catch (e) {
      return e.message;
    }
  };
}

export function setLogin(payload) {
  return ({
    type: type.SET_LOGIN,
    payload,
  });
}

export function logOut() {
  return ({
    type: type.LOG_OUT,
  });
}

//------------------------user--------------------------//

export function getRank(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://192.168.0.179:3001/User/rank",
        { total: payload }
      );
      return dispatch({
        type: type.GET_RANK,
        payload: json.data.Request,
      });
    } catch (e) {
      return e.message;
    }
  };
}

export function getUser(id) {
  return async function (dispatch) {
    try {
      if (id) {
        var json = await axios.get(
          "http://192.168.0.179:3001/User/" + id
        );
        return dispatch({
          type: type.GET_USER,
          payload: json.data,
        });
      } else {
        var json = await axios.get("http://192.168.0.179:3001/User");
        return dispatch({
          type: type.GET_ALL_USER,
          payload: json.data,
        });
      }
    } catch (e) {
      return e.message;
    }
  };
}

// export function PostUser(payload){
//     return async function(dispatch){
//         try{
//             console.log("payload", payload)
//             return await axios.post("http://192.168.0.179:3001/User", payload)
//             .catch(error =>  console.log(error))

//         }catch(e){
//             console.log("error en acción:", e)
//             return e.message
//         }
//     }
// }
export function PostUser(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.post(
        "http://192.168.0.179:3001/User",
        payload
      );
      //para que los métodos de axios funcionen bien en el emulador expo
      //teniendo el back corriendo en tu pc, es necesario que reemplaces lolcalhost
      //en la url del método, con tu ipv4. Esta se encuentra yendo a configuración, red e internet,
      //propiedades, y yendo hacia abajo aparece "ipv4".
      return dispatch({
        type: type.POST_USER,
        payload: json.data,
      });
    } catch (e) {
      console.log("error en acción:", e);
      return e.message;
    }
  };
}

export function PutUser(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.put(
        "http://192.168.0.179:3001/User",
        payload
      );
      return dispatch({
        type: type.PUT_USER,
        payload: json.data,
      });
    } catch (e) {
      return e.message;
    }
  };
}

export function deleteUser(payload) {
  return async function (dispatch) {
    try {
      const response = axios.delete(
        `http://192.168.0.179:3001/User/delete/recycle/${payload}`
      );
      return response;
    } catch (e) {
      return e.message;
    }
  };
}
export function restoreUser(payload) {
  return async function (dispatch) {
    try {
      const response = axios.delete(
        `http://192.168.0.179:3001/User/delete/restore/${payload}`
      );
      return response;
    } catch (e) {
      return e.message;
    }
  };
}
//-----------------------Filters--------------------------//

export function filterByCountry(payload) {
  return {
    type: type.FILTER_BY_COUNTRY,
    payload,
  };
}

export function filterByTop(payload) {
  return {
    type: type.SORTED_BY_POINTS,
    payload,
  };
}
//-----------------------friends---------------------//
export function PostFriend(payload) {
  return async function (dispatch) {
    try {
      const response = axios.post(
        "http://192.168.0.179:3001/friend",
        payload
      );
      return response;
    } catch (e) {
      return e.message;
    }
  };
}

export function GetFriends() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://192.168.0.179:3001/friend"
      );
      return dispatch({
        type: type.GET_FRIENDS,
        payload: json.data,
      });
    } catch (e) {
      return e.message;
    }
  };
}

export function PutFriend(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.put(
        "http://192.168.0.179:3001/friend",
        payload
      );
      return dispatch({
        type: type.PUT_FRIEND,
        payload: json.data,
      });
    } catch (e) {
      return e.message;
    }
  };
}
//--------------------countries----------------------//
export function getCountrie(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://192.168.0.179:3001/countries",
        name
      );
      return dispatch({
        type: type.GET_COUNTRIES,
        payload: json.data,
      });
    } catch (e) {
      return e.message;
    }
  };
}

export function setCountrie(countrie) {
  return {
    type: type.SET_COUNTRIE,
    payload: countrie,
  };
}

export function getAllCountries(form = false) {
  return async function (dispatch) {
    try {
      var { data } = await axios.get(
        "http://192.168.0.179:3001/countries"
      );
      if (!form) {
        return dispatch({
          type: type.GET_ALL_COUNTRIES,
          payload: data,
        });
      } else {
        var aux = [];
        data?.map((e) => {
          aux.push({ label: e.name, value: e.name });
        });
        return dispatch({
          type: type.GET_ALL_COUNTRIES,
          payload: aux,
        });
      }
    } catch (e) {
      return e.message;
    }
  };
}

//------------------------game.action------------------//
export function gameAction(country, attempt) {
  return function (dispatch) {
    try {
      const lastattemp = {
        name: attempt.name,
        area: area(country, attempt),
        hemisphere: hemisphere(country, attempt),
        population: population(country, attempt),
        coordinates: coordinates(country, attempt),
        continent: continent(country, attempt),
      };
      return dispatch({
        type: type.CALL_GAME_ACTIONS,
        payload: lastattemp,
      });
    } catch (e) {
      return e.message;
    }
  };
}
//------------------------pay.action------------------//
export function PostPayment(payload) {
  console.log('payloadPostPays',payload)
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://192.168.0.179:3001/pays",
        payload
      );
      return response;
    } catch (e) {
      return e.message;
    }
  };
};
