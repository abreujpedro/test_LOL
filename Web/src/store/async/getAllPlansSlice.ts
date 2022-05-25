import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetRequest } from "../../services/requests/GetRequest";

export const getPriceAction = createAsyncThunk(
  "plans/getAllPlans",
  async ({
    dddOrigin,
    dddToCall,
    token,
  }: {
    dddOrigin: string;
    dddToCall: string;
    token: string;
  }) => {
    const response = await GetRequest.getPrice(dddOrigin, dddToCall, token);
    return response?.data;
  }
);

interface IInitialState {
  list: [];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: unknown;
}

const initialState: IInitialState = {
  list: [],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPriceAction.pending, state => {
      state.status = "pending";
    });
    builder.addCase(getPriceAction.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getPriceAction.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
  },
});

export default usersSlice.reducer;
