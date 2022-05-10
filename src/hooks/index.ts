import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {AppDispatch, State} from "../types/store";

// Use throughout your hooks instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
