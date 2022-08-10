import { type } from "../actions/types";


const initialState = {
  game: [],
  countries: [],
  countrie: {},
  users: [],
  login: [],
  attemps: [],
  userdetail: {},
  rank: [],
  rank_filter: [],
  rank_filter_by_country: [],
  rank_filter_by_ranks: [],
  friends: [],
  friendsDetail: {},
  giveUp: false,
  searchFriend: [],
  profileUser: {},
  profileAllUser: [],
  stat : { optionModalVisible: false, playbackObj: null, soundObj: null, currentAudio : {}},
  soundOn : true,
  filter : false,
  isSpanish: true,
  loginProfile: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FIRST:
      return {
        ...state,
        first: action.payload,
      };
    case type.GET_GAME:
      return {
        ...state,
        game: action.payload,
      };
    case type.GIVE_UP:
      return {
        ...state,
        giveUp: action.payload,
      };
    case type.NEW_GAME:
      return {
        ...state,
        attemps: [],
      };
    case type.GET_USER:
      action.payload = { Request: action.payload }
      return {
        ...state,
        login: action.payload,
        userdetail: action.payload,
      };
    case type.POST_USER:
      action.payload = { Request: action.payload }
      return {
        ...state,
        login: action.payload,
        userdetail: action.payload,
      };
    case type.GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
    case type.POST_LOGIN:

      return {
        ...state,
        login: action.payload,
        userdetail: action.payload,
      };
    case type.SET_LOGIN:
      // let profileAux = {Request:action.payload.Request.logear}
      action.payload = { Request: action.payload }
      
      return {
        ...state,
        login: action.payload,
        userdetail: action.payload,
        // loginProfile: profileAux,        
      };
    case type.GET_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case type.PUT_USER:
      return {
        ...state,
        users: action.payload,
      };
    case type.FILTER_BY_COUNTRY:
      if (action.payload === "All Countries") {
        if(state.rank.length !== state.rank_filter_by_ranks.length){
          return {
            ...state,
            rank_filter: state.rank_filter_by_ranks,
            rank_filter_by_country: state.rank,
          };
        }else {
          return {
            ...state,
            rank_filter: state.rank,
            rank_filter_by_country: state.rank,
          };
        }
      } else {
        const filCountry = state.rank.filter(
          (el) => el.country.toLowerCase() === action.payload.toLowerCase()
        );
        let filtered = []
        filCountry.forEach(el => {if(state.rank_filter_by_ranks.includes(el)){filtered.push(el)}})
        return {
          ...state,
          rank_filter: filtered,
          rank_filter_by_country: filCountry,
        };
      }
    case type.FILTER_BY_RANK:
      if (action.payload === "All Ranks") {
        if(state.rank.length !== state.rank_filter_by_country.length){
          return {
            ...state,
            rank_filter: state.rank_filter_by_country,
            rank_filter_by_ranks: state.rank,
          };
        }else {
          return {
            ...state,
            rank_filter: state.rank,
            rank_filter_by_ranks: state.rank,
          };
        }
      } else {
        let from = action.payload.replace(" ","").split("-")[0] - 1
        let to = action.payload.replace(" ","").split("-")[1]
        let aux = state.rank.slice(from, to)
        let filtered = []
        aux.forEach(el => {if(state.rank_filter_by_country.includes(el)){filtered.push(el)}})
        return {
          ...state,
          rank_filter: filtered,
          rank_filter_by_ranks: aux,
        };
      }
    case type.GET_COUNTRIES:
      return {
        ...state,
        countrie: action.payload,
      };
    case type.GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case type.SET_COUNTRIE:
      return {
        ...state,
        countrie: action.payload,
      };
    case type.CALL_GAME_ACTIONS:
      return {
        ...state,
        attemps: [...state.attemps, action.payload],
      };
    case type.GET_RANK:
      return {
        ...state,
        rank: action.payload,
        rank_filter: action.payload,
        rank_filter_by_country: action.payload,
        rank_filter_by_ranks: action.payload,
      };
      
    case type.SET_SOUND:
      return {
        ...state,
        stat: action.payload,
      };
    case type.SOUND_ON:
      return {
        ...state,
        soundOn: action.payload,
      };
    case type.LOG_OUT:
      return {
        ...state,
        game: [],
        login: [],
        attemps: [],
        userdetail: {},
        rank: [],
        rank_filter: [],
        friends: [],
        giveUp: false,
        first: false,
      };
    case type.POST_REVIEW:
      return {
        ...state,
      };
    case type.GET_FRIENDS:
      return {
        ...state,
        friends: action.payload,
      };
    case type.PUT_FRIEND:
      return {
        ...state,
        friends: action.payload,
      };
    case type.GET_FRIEND_DETAIL:
      return {
        ...state,
        friendsDetail: action.payload,
      };
    case type.SEARCH_FRIEND:
      let filtered = action.payload.data.Request.filter(user =>
        user.username.toLowerCase().includes(action.payload.friend.toLowerCase()))

      return {
        ...state,
        searchFriend: filtered
      }
    case type.POST_FRIEND:
      return {
        ...state
      }
    case type.DELETE_FRIEND:
      return {
        ...state
      };
    case type.CLEAR_FRIEND_DETAIL:
      return {
        ...state,
        friendsDetail: action.payload,
      };
    case type.GET_ALL_PROFILES:
      return {
        ...state,
        profileAllUser: action.payload,
      };
    case type.GET_PROFILE_USER:
      return {
        ...state,
        profileUser: action.payload.Request,
      };
    case type.GET_LANGUAGES:
      return {
        ...state,
        isSpanish: action.payload
    }
    default: {
      return state;
    }
  }
};
