import {CardControlsProps} from "./card-controls.props";
import CardControl from "../card-control/card-control";

const CardControls = function ({id, text, editCard, updatedText, setEditCard}: CardControlsProps): JSX.Element {
  return (
    <div className="checklist__controls">
      <CardControl title={`Редактировать`} editCard={editCard} handleClick={() => {
        if (editCard) {
          if (updatedText !== text) {
            // dispatch(editTextCard(id, updatedText));
          }
        }
        setEditCard(!editCard);
      }} />
      <CardControl deleteCard={true} title={`Удалить`} handleClick={() => {
      }} />
    </div>
  )
};

export default CardControls;
