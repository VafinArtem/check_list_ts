import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {rootReducer} from "./root-reduser";

export const store = configureStore({
  reducer: rootReducer,
});

// export type AppDispatch = typeof index.dispatch;
// export type RootState = ReturnType<typeof index.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
