import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

// Reducers
import alertReducer from "./alert/alertReducer";
import authReducer from "./auth/authReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ alertReducer, authReducer }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
