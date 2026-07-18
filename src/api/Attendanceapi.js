import axios from "axios";

const AAPI = axios.create({
  baseURL: "http://localhost:5000/api/attendance",
});

export default AAPI;