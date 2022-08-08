import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/index";
import thunk from "redux-thunk";

const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
});

export default store;
