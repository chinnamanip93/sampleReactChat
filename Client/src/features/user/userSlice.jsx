import { createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "./userThunk.jsx";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null,
    usersInfo: [],
  },
  reducers: {
    // logout(state) {
    //   state.user = null;
    //   state.token = null;
    // },
    // settoken: (state, { payload }) => {
    //   state.token = payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(userLogin.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(userLogin.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.token = action.payload;
      // })
      // .addCase(userLogin.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // })
      .addCase(getAllUser.pending, (state) => {
        state.status = "token loading";
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.usersInfo = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.status = "token failed";
        state.error = action.error.message;
      });
  },
});

export const { logout, settoken } = userSlice.actions;

export default userSlice.reducer;
