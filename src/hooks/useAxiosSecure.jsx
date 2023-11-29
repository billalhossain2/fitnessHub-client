import axios from "axios"

const axiosSecure = axios.create({
    baseURL: "http://localhost:9000",
    withCredentials:true
})

const useAxiosSecure = () => {

  // Add a request interceptor
  axios.interceptors.request.use(
    (config)=>{
    // set token into header  before request is sent
    console.log("I am requesting to server==============> ")
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
  axios.interceptors.response.use()



  return axiosSecure
}

export default useAxiosSecure