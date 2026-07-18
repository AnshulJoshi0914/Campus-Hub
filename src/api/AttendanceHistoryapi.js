import axios from "axios";

const AHAPI = axios.create({
  baseURL: "http://localhost:5000/api/attendance",
});

export default API;