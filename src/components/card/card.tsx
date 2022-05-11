import React from "react";
import {CardProps} from "./card.props";
import classNames from "classnames";

const Card = function ({id, text, isComplete}: CardProps): JSX.Element {
  return (
    <li className={classNames(`checklist__item`, {
      [`checklist__item--complete`]: isComplete,
    })}>
      <div className={classNames(`checklist__inner`, {
        [`checklist__inner--complete`]: isComplete,
      })}>
        <div className="checklist__controls">
          <button className="checklist__control checklist__control--edit" aria-label="Редактировать"></button>
          <button className="checklist__control checklist__control--delete" aria-label="Удалить"></button>
        </div>
        <label className="checklist__box">
          <input type="checkbox" name={`check-${id}`} className="checklist__checkbox visually-hidden"
                 defaultChecked={isComplete}/>
          <span className="checklist__check-box"></span>
          <span className="checklist__name">{text}
          </span>
        </label>
      </div>
    </li>
  )
}

export default Card;