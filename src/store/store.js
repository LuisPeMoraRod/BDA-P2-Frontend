import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clients/clients";
import productsReducer from "./slices/products/products";
import filesReducer from "./slices/files/files";

const reducer = {
  clients: clientsReducer,
  products: productsReducer,
  files: filesReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
