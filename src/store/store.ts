import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import ThemeSlice from './slices/ThemeSlice';
import HeaderSlice from './slices/HeaderSlice';
import ModalWindowSlice from './slices/ModalWindowSlice';
import FilterSlice from './slices/FilterSlice';
import CartSlice from './slices/CartSlice';

export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    header: HeaderSlice,
    modalWindow: ModalWindowSlice,
    filter: FilterSlice,
    cart: CartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
