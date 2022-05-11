import React from "react";

const Complete = function (): JSX.Element {
  return (
    <div className="checklist__complete">
      <svg className="checklist__complete-icon" width="200" height="200">
        <use xlinkHref="img/sprite.svg#icon-complete"></use>
      </svg>
    </div>
  )
}

export default Complete;
