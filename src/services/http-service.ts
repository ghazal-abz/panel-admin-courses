import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const httpService = axios.create({
  baseURL: BASE_URL,
});

const httpInterceptedService = axios.create({
  baseURL: BASE_URL,
});

httpInterceptedService.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { httpService };
