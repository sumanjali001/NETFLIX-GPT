import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeConfig: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeConfig } = configSlice.actions;

export default configSlice.reducer;
