import axios from "axios";
import { useSelector } from "react-redux";

const useAuthenticatedApi = () => {
  const token = useSelector((state) => state.auth.token);
  const apiUrl = import.meta.env.VITE_API_URL;
  const api = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(token);
  return api;
};

export default useAuthenticatedApi;
