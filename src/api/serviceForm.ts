import axios from "axios";

const BASE_URL = "https://api.stackforce.ru/v1";

const api = axios.create({
  baseURL: BASE_URL,
});
export default api;
