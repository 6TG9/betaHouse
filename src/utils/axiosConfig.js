import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://beta-ohxc.onrender.com",
});

export default axiosInstance;
