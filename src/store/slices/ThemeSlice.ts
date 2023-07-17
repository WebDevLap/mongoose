import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "dark" | "light";

interface IInitialState {
  theme: ThemeType;
}

const initialState: IInitialState = {
  theme: "light",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
