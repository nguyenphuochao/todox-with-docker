import axios from "axios";

const API_DEVELOPMENT = "http://localhost:8000/api";
const API_PRODUCTION = "http://103.163.118.135:8000/api";

const BASE_URL =
  import.meta.env.MODE === "development" ? API_DEVELOPMENT : API_PRODUCTION;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
