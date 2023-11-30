import axios from "axios"
import { useEffect } from "react"

const axiosSecure = axios.create({
    baseURL: "https://assignment-12-server-six-gamma.vercel.app",
    withCredentials:true
})

const useAxiosSecure = () => {

useEffect(()=>{
    // Add a request interceptor
    axiosSecure.interceptors.request.use(
      (config)=>{
      // set token into header  before request is sent
      console.log("I am from request interceptor==============> ")
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `Bearer ${token}`
      return config;
    },
    (error)=>{
       // Do something with request error
       return Promise.reject(error);
    }
    )
  
  
  
    //Add a response interceptor
    axiosSecure.interceptors.response.use()
}, [axiosSecure])



  return axiosSecure
}

export default useAxiosSecure