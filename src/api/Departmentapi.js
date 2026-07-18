import axios from "axios";

const DAPI = axios.create({
  baseURL: "http://localhost:5000/api/departments",
});

export default DAPI;