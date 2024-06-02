import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://imu-shop.onrender.com",
  // baseURL: "http://localhost:3001",
});

export default baseUrl;
