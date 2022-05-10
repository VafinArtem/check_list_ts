import {AuthorizationStatus} from "../constants/constants";
import {store} from "../store";

export type UserStateType = {
    authorizationStatus: AuthorizationStatus
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
