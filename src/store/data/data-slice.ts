import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from "../../constants/constants";
import {cardsMock} from "../../mocks/mocks";
import {DataStateType} from "../../types/store";


const initialState: DataStateType = {
  cards: cardsMock,
};

export const DataSlice = createSlice({
  name: NameSpace.DATA,
  initialState,
  reducers: {},
});
