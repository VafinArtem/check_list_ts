import {combineReducers} from '@reduxjs/toolkit';
import {UserSlice} from "./user/user-slice";


export const rootReducer = combineReducers({
  user: UserSlice.reducer,
  // data: DataSlice.reducer,
});
