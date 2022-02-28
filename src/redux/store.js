import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import userReducer from "./reducer";

const users = configureStore({
  reducer: userReducer,
});

export default users;
