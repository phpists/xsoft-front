import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appReducer } from "./app/app.slice";
import { auth } from "./auth/auth.api";
import { authReducer } from "./auth/auth.slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    [auth.reducerPath]: auth.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auth.middleware),
});

setupListeners(store.dispatch);

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
