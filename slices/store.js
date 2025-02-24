import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./UsersSlice";
import { apiSlice } from "./AsyncUsers";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
