import React from "react";
import {ListProps} from "./list.props";
import {ListName, ListType} from "../../constants/constants";
import classNames from "classnames";
import Card from "../card/card";

const List = function ({type, cards}: ListProps): JSX.Element {
  return (
    <div className="checklist__container">
      <h3 className={classNames(`checklist__subtitle subtitle`, {
        [`subtitle--in-process`]: type === ListType.PROCESS,
        [`subtitle--ready`]: type === ListType.COMPLETE,
      })}>{ListName[type]}</h3>
      <ul className="checklist__list">
        {cards.map(({id, text, isComplete}, index) => <Card
          id={id}
          text={text}
          isComplete={isComplete}
          key={index}
        />)}
      </ul>
    </div>
  );
};

export default List;
