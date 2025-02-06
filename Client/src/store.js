import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice.jsx";
import authReducer from "./features/auth/authSlice.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});

export default store;
