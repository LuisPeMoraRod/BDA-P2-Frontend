import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clients/clients";
import productsReducer from "./slices/products/products";
import filesReducer from "./slices/files/files";
import brandsReducer from "./slices/brands/brands";

const reducer = {
  clients: clientsReducer,
  products: productsReducer,
  brands: brandsReducer,
  files: filesReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
