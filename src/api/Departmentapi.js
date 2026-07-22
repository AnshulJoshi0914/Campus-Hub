import axios from "axios";

const DAPI = axios.create({
  baseURL: "http://localhost:5000/api/departments",
});

DAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default DAPI;