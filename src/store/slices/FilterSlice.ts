import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  priceFrom: 0,
  priceTo: 0,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setFilterPriceFrom: (state, action: PayloadAction<number>) => {
      state.priceFrom = action.payload;
    },
    setFilterPriceTo: (state, action: PayloadAction<number>) => {
      state.priceTo = action.payload;
    },
  },
});

export default FilterSlice.reducer;
export const { setFilterName, setFilterPriceFrom, setFilterPriceTo } =
  FilterSlice.actions;
