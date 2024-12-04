import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appReducer } from "./app/app.slice";
import { auth } from "./auth/auth.api";
import { authReducer } from "./auth/auth.slice";
import { clientsReducer } from "./clients/clients.slice";
import { clients } from "./clients/clients.api";
import { productsReducer } from "./products/products.slice";
import { products } from "./products/products.api";
import { companiesReducer } from "./companies/companies.slice";
import { companies } from "./companies/companies.api";
import { personalReducer } from "./personal/personal.slice";
import { personal } from "./personal/personal.api";
import { brandsReducer } from "./brands/brands.slice";
import { brands } from "./brands/brands.api";
import { suppliersReducer } from "./suppliers/suppliers.slice";
import { suppliers } from "./suppliers/suppliers.api";
import { warehouses } from "./warehouses/warehouses.api";
import { warehousesReducer } from "./warehouses/warehouses.slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    [auth.reducerPath]: auth.reducer,
    auth: authReducer,
    clients: clientsReducer,
    [clients.reducerPath]: clients.reducer,
    products: productsReducer,
    [products.reducerPath]: products.reducer,
    companies: companiesReducer,
    [companies.reducerPath]: companies.reducer,
    pesonal: personalReducer,
    [personal.reducerPath]: personal.reducer,
    brands: brandsReducer,
    [brands.reducerPath]: brands.reducer,
    suppliers: suppliersReducer,
    [suppliers.reducerPath]: suppliers.reducer,
    warehouses: warehousesReducer,
    [warehouses.reducerPath]: warehouses.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(auth.middleware)
      .concat(clients.middleware)
      .concat(products.middleware)
      .concat(companies.middleware)
      .concat(personal.middleware)
      .concat(brands.middleware)
      .concat(suppliers.middleware)
      .concat(warehouses.middleware),
});

setupListeners(store.dispatch);

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
