import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProducts } from '../../API/API_TYPE';
import { getCartItemsLS } from '../../utils/getCartItemsLS';

export interface IItem extends IProducts {
  count: number;
}

interface IInitialState {
  items: IItem[];
  totalPrice: number;
  totalProducts: number;
}

const initialState: IInitialState = {
  items: getCartItemsLS(),
  totalPrice: 0,
  totalProducts: 0,
};

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addCartItemCount: (state, action: PayloadAction<IProducts>) => {
      var isInCart = false;

      for (let index = 0; index < state.items.length; index++) {
        const element = state.items[index];
        if (element.id === action.payload.id) {
          isInCart = true;
          element.count++;
          break;
        }
      }

      if (!isInCart) {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeCartItemCount: (state, action: PayloadAction<number>) => {
      for (const element of state.items) {
        if (element.id === action.payload) {
          element.count--;
          if (element.count <= 0) {
            state.items = state.items.filter((el) => el.id !== action.payload);
          }
        }
      }
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
    setCartTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    setCartTotalProducts: (state,action: PayloadAction<number>) => {
      state.totalProducts = action.payload
    }
  },
});

export default FilterSlice.reducer;
export const { addCartItemCount, removeCartItemCount, deleteCartItem, setCartTotalPrice, setCartTotalProducts } = FilterSlice.actions;
