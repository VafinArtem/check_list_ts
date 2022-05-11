import classNames from 'classnames';
import {CardControlProps} from "./card-control.props";

const CardControl = function ({title, editCard, deleteCard, handleClick}: CardControlProps) {
  return (
    <button
      className={classNames(`checklist__control`, {
        [`checklist__control--edit`]: !editCard && !deleteCard,
        [`checklist__control--save`]: editCard,
        [`checklist__control--delete`]: deleteCard,
      })}
      aria-label={title}
      onClick={handleClick}
    />
  );
};

export default CardControl;
