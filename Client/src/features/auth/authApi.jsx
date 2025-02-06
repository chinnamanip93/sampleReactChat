import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utility/apiClient.js";
// import { setToken } from "./authSlice.jsx";

export const loginUser = createAsyncThunk(
  "auth/loginuser'",
  async (credentials) => {
    try {
      debugger;
      const response = await apiClient.post("auth/login", credentials);
      console.log(response);
      //const token = response.data;
      // dispatch(setToken(token));
      return response.data;
    } catch (error) {
      console.log("Failed to log in:", error);
    }
  }
);
