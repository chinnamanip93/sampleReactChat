import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authApi.jsx";

const initialState = {
  status: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setToken: (state, action) => {
    //   state.token = action.payload;
    // },
    removeToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      sessionStorage.setItem("token", action.payload);
      state.token = action.payload;
    });
  },
});

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
