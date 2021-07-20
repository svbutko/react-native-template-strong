import {combineReducers} from "@reduxjs/toolkit";
import {SystemReducer} from "./system/systemSlice";

export const rootReducer = combineReducers({
  system: SystemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
