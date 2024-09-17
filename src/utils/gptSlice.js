import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
  },
  reducers: {
    setGptSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
  },
});

export const { setGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
