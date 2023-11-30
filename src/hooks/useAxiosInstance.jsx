import axios from "axios";

const instance = axios.create({
  baseURL: "https://assignment-12-server-six-gamma.vercel.app",
});


const useAxiosInstance = () => instance;

export default useAxiosInstance
