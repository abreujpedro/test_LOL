import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITokenState {
  value: string | null;
}

const initialState: ITokenState = {
  value: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = counterSlice.actions;

export default counterSlice.reducer;
