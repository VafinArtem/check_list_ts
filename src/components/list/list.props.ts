import {ListType} from "../../constants/constants";
import {CardType} from "../../types/store";

export type ListProps = {
  type: ListType,
  cards: CardType[],
}
