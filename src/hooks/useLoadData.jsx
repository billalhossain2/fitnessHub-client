import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import useAxiosSecure from "./useAxiosSecure";

const useLoadData = (endpoint) => {
  const axiosSecure = useAxiosSecure()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    axiosSecure.get(`${endpoint}`)
    .then(res => {
      setData(res.data)
      setLoading(false)
      setError("")
    })
    .catch(error => {
      setError(error.message)
      setLoading(false)
    })
  }, [endpoint])

  return {loading, error, data}
}

export default useLoadData