import React from "react";

export type CardControlProps = {
  title: string,
  editCard?: boolean,
  deleteCard?: boolean,
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}
