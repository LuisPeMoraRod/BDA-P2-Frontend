import { createSlice } from "@reduxjs/toolkit";

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
  },
  reducers: {
    setBrands(state, action) {
      state.brands = action.payload;
    },
  },
});

export const brandsActions = brandsSlice.actions;

export default brandsSlice.reducer;
