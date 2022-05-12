import React, {useRef, useState} from "react";
import {CardProps} from "./card.props";
import classNames from "classnames";
import {useAppDispatch} from "../../hooks";
import {setCompleteStatus} from "../../store/actions/actions";
import CardControls from "../card-controls/card-controls";

const Card = function ({id, text, isComplete}: CardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const spanRef = useRef<HTMLSpanElement>(null);
  const [updatedText, setUpdatedText] = useState(text);
  const [editCard, setEditCard] = useState(false);

  return (
    <li className={classNames(`checklist__item`, {
      [`checklist__item--complete`]: isComplete,
    })}>
      <div className={classNames(`checklist__inner`, {
        [`checklist__inner--complete`]: isComplete,
      })}>
        <CardControls id={id} text={text} editCard={editCard} updatedText={updatedText} setEditCard={setEditCard} />
        <label className="checklist__box">
          <input type="checkbox" name={`check-${id}`} className="checklist__checkbox visually-hidden"
            defaultChecked={isComplete} onClick={(evt) => {
            evt.preventDefault();
            if (!editCard) {
              dispatch(setCompleteStatus(id, !isComplete));
            } else {
              spanRef.current?.focus();
            }
          }} />
          <span ref={spanRef} className={classNames(`checklist__name`, {
            [`checklist__name--edit`]: editCard
          })} contentEditable={editCard} suppressContentEditableWarning={true}
            tabIndex={editCard ? 0 : undefined}
            onInput={() => setUpdatedText(spanRef.current?.textContent ?? text)}>{text}</span>
        </label>
      </div>
    </li>
  )
}

export default Card;
