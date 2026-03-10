import axios from "axios";

const api = axios.create({
  baseURL: "https://hrms-lite-eo0p.onrender.com/api/"
});

export default api;