import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

// Reducers
import alertReducer from "./alert/alertReducer";
import authReducer from "./auth/authReducer";
import userReducer from "./users/userReducer";
import countriesReducer from "./contries/countriesReducer";
import gamesReducer from "./games/gamesReducer";
import payReducer from "./pay/payReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ alertReducer, authReducer, userReducer, countriesReducer, gamesReducer, payReducer }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
