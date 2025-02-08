// axiosInstance.js
import axios from "axios";
// import store from "../store";
const apiClient = axios.create({
  baseURL: "http://localhost:8800/api/",
});

apiClient.interceptors.request.use(
  (config) => {
    // const state = store.getState();
    // console.log(state);

    // const token = state.auth.token;
    const token = sessionStorage.getItem("token");
    debugger;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
