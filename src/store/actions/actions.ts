import {createAction} from "@reduxjs/toolkit";

export const setCompleteStatus = createAction(`setCompleteStatus`, (id, status) => ({payload: {id, status}}))
