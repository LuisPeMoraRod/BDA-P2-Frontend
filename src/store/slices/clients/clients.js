import { createSlice } from "@reduxjs/toolkit";

const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    total: 0,
  },
  reducers: {
    setClients(state, action) {
      state.clients = action.payload;
    },
    setTotal(state, action) {
      state.total = action.payload;
    },
  },
});

export const clientsActions = clientsSlice.actions;

export default clientsSlice.reducer;
