import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from "../../constants/constants";
import {cardsMock} from "../../mocks/mocks";
import {CardType, DataStateType} from "../../types/store";
import {setCompleteStatus} from "../actions/actions";

const initialState: DataStateType = {
  cards: cardsMock,
};

const findCardIndex = (cards: CardType[], id: number) => cards.findIndex((card) => card.id === id);

export const DataSlice = createSlice({
  name: NameSpace.DATA,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCompleteStatus, (state, action) => {
      const currentIndexCard = findCardIndex(state.cards, action.payload.id);
      console.log(Object.assign(
        {},
        state.cards[currentIndexCard],
        {isComplete: action.payload.status}
      ))
      state.cards[currentIndexCard] = Object.assign(
        {},
        state.cards[currentIndexCard],
        {isComplete: action.payload.status}
      );
    })
  }
});
