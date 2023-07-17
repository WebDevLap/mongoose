import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBurgerActive: false,
};

const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setIsBurgerActive: (state, action: PayloadAction<boolean>) => {
      state.isBurgerActive = action.payload;
    },
  },
});

export default HeaderSlice.reducer;
export const { setIsBurgerActive } = HeaderSlice.actions;
