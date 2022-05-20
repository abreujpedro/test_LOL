import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/api/api";

const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (params: string) => {
    const response = await api(params);
    return response.data;
  }
);

interface InitialState {
  list: [];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: unknown;
}

const initialState: InitialState = {
  list: [],
  status: "idle",
  error: null,
};

//TODO ERRORS

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: builder => {
    builder.addCase(fetchUserById.pending, state => {
      state.status = "pending";
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchUserById.rejected, state => {
      state.error = "error";
      state.status = "failed";
    });
  },
});

export default usersSlice.reducer;
