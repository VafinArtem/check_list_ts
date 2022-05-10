import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus} from "../../constants/constants";
import {UserStateType} from "../../types/store";


const NameSpace = {
  USER: `USER`
}

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
