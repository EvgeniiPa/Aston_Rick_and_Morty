import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import favouriteReducer from "./favouritesSlice";
import registrationReducer from "./registrationSlice";
import { characterApi } from "./characterApi";


export const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
    [characterApi.reducerPath]: characterApi.reducer,
    registration: registrationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
