import { createSlice } from "@reduxjs/toolkit";

const filesSlice = createSlice({
  name: "files",
  initialState: {
    loaded: false,
  },
  reducers: {
    setLoaded(state, action) {
      state.loaded = action.payload;
    },
  },
});

export const filesActions = filesSlice.actions;

export default filesSlice.reducer;
