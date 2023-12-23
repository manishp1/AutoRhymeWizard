import { createSlice } from "@reduxjs/toolkit";

export const HomeSlice = createSlice({
  name: "home",
  initialState: {
    userData: {},
    geners: {},
  },
  reducers: {
    getUserData: (state, action) => {
      state.userData = action.payload;
    },
    getGeners: (state, action) => {
      state.geners = action.payload;
    },
  },
});

export const {getUserData , getGeners} = HomeSlice.actions
export default HomeSlice.reducer