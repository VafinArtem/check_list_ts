import {createSelector} from "@reduxjs/toolkit";
import {CardType, State} from "../../types/store";

export const selectAllCards = (state: State) => state.data.cards;

export const selectCompliteCards = createSelector(
  selectAllCards,
  (allCards: CardType[]) => allCards.filter((card: CardType) => card.isComplete)
);

export const selectNotCompliteCards = createSelector(
  selectAllCards,
  (allCards: CardType[]) => allCards.filter((card: CardType) => !card.isComplete)
);
