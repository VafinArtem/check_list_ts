import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from "../../constants/constants";
import {cardsMock} from "../../mocks/mocks";
import {CardType, DataStateType} from "../../types/store";
import {editTextCard, setCompleteStatus} from "../actions/actions";

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
      state.cards[currentIndexCard] = Object.assign(
        {},
        state.cards[currentIndexCard],
        {isComplete: action.payload.status}
      );
    });
    builder.addCase(editTextCard, (state, action) => {
      const currentIndexCard = findCardIndex(state.cards, action.payload.id);
      state.cards[currentIndexCard] = Object.assign(
        {},
        state.cards[currentIndexCard],
        {text: action.payload.updatedText}
      );
    });
  }
});
