import {createAction} from "@reduxjs/toolkit";

export const setCompleteStatus = createAction(`setCompleteStatus`, (id, status) => ({payload: {id, status}}));
export const editTextCard = createAction(`editTextCard`, (id, updatedText) => ({payload: {id, updatedText}}));
export const removeCard = createAction(`removeCard`, (id) => ({payload: {id,}}));
