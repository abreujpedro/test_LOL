import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenState/tokenSlice";
import priceReducer from "./async/getPriceSlice";

export const store = configureStore({
  reducer: { tokenReducer, priceReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
