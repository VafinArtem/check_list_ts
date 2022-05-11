import {AuthorizationStatus} from "../constants/constants";
import {store} from "../store";

export type UserStateType = {
  authorizationStatus: AuthorizationStatus
}

export type DataStateType = {
  cards: CardType[]
}

export type CardType = {
  id: number,
  text: string,
  isComplete: boolean
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
