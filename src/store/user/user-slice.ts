import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from "../../constants/constants";
import {UserStateType} from "../../types/store";

const initialState: UserStateType = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

export const UserSlice = createSlice({
  name: NameSpace.USER,
  initialState,
  reducers: {
    successAuthorization: (state) => {
      state.authorizationStatus = AuthorizationStatus.AUTH;
    },
    failAuthorization: (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    },
  },
});

export const {successAuthorization, failAuthorization} = UserSlice.actions;
