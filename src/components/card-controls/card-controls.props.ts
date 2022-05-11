import React from "react";

export type CardControlsProps = {
  id: number,
  text: string,
  editCard: boolean,
  updatedText: string,
  setEditCard: React.Dispatch<React.SetStateAction<boolean>>
}
