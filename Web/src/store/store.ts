import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenState/tokenSlice";
import plansReducer from "./async/getAllPlansSlice";

export const store = configureStore({
  reducer: { tokenReducer, plansReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
