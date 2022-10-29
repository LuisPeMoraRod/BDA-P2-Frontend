import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    total: 0
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setTotal(state, action){
      state.total = action.payload;
    }
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
