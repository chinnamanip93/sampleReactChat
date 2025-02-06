import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import apiClient from "../../utility/apiClient.js";

// export const userLogin = createAsyncThunk("user/login", async (userInfo) => {
//   debugger;
//   const response = await axios.post(
//     "http://localhost:8800/api/auth/login",
//     userInfo
//   );

//   if (response.status != 200) {
//     throw new Error(response.Error);
//   }
//   console.log(response);
//   return response.data;
// });

export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  debugger;
  const response = await apiClient.get("users/getAllUser");
  if (response.status != 200) {
    throw new Error(response.Error);
  }
  //console.log(response);
  return response.data;
});
