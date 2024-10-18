import { combineReducers } from "@reduxjs/toolkit";
import { carrinhoSlice } from "./reducers/carrinhoSlice";

export const rootReducer = combineReducers({
});

export type RootState = ReturnType<typeof rootReducer>;