import {CardControlsProps} from "./card-controls.props";
import CardControl from "../card-control/card-control";
import {editTextCard, removeCard} from "../../store/actions/actions";
import {useAppDispatch} from "../../hooks";

const CardControls = function ({id, text, editCard, updatedText, setEditCard}: CardControlsProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="checklist__controls">
      <CardControl title={`Редактировать`} editCard={editCard} handleClick={() => {
        if (editCard) {
          if (updatedText !== text) {
            dispatch(editTextCard(id, updatedText));
          }
        }
        setEditCard(!editCard);
      }} />
      <CardControl deleteCard={true} title={`Удалить`} handleClick={() => dispatch(removeCard(id))} />
    </div>
  )
};

export default CardControls;
