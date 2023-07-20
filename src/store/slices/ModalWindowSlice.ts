import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  modalWindowStack: string[];
}

const initialState: IInitialState = {
  modalWindowStack: [],
};

const ModalWindowSlice = createSlice({
  name: "modal window",
  initialState,
  reducers: {
    addModalWindowItem: (state, action: PayloadAction<string>) => {
      state.modalWindowStack.push(action.payload);
    },
    removeModalWindowItem: (state, action: PayloadAction<string>) => {
      state.modalWindowStack = state.modalWindowStack.filter(
        (el) => el !== action.payload
      );
    },
  },
});

export default ModalWindowSlice.reducer;
export const { addModalWindowItem, removeModalWindowItem } =
  ModalWindowSlice.actions;
