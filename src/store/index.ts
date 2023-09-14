import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "@/store/slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Reducers } from "@/common";

const store = configureStore({
  reducer: {
    [Reducers.FAVORITES]: favoritesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;