import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appReducer } from "./app/app.slice";
import { auth } from "./auth/auth.api";
import { authReducer } from "./auth/auth.slice";
import { clientsReducer } from "./clients/clients.slice";
import { clients } from "./clients/clients.api";
import { productsReducer } from "./products/products.slice";
import { products } from "./products/products.api";

export const store = configureStore({
  reducer: {
    app: appReducer,
    [auth.reducerPath]: auth.reducer,
    auth: authReducer,
    clients: clientsReducer,
    [clients.reducerPath]: clients.reducer,
    products: productsReducer,
    [products.reducerPath]: products.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(auth.middleware)
      .concat(clients.middleware)
      .concat(products.middleware),
});

setupListeners(store.dispatch);

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
