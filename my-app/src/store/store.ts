import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favouriteReducer from './favouritesSlice'
import registrationReducer from './registrationSlice'
 

export const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
    registration: registrationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
