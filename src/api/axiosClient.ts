import axios from "axios";
import { toast } from "react-toastify";

// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
// axios.defaults.headers["Content-Type"] = "application/json";
// axios.defaults.timeout = 5000;

const api = axios.create({});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      toast.error("An error occurred");
    } else if (error.request) {
      toast.error("Network error: No response received");
    } else {
      toast.error(`Error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default api;
