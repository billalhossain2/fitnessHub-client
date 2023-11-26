import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useLoadData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    axios.get(`http://localhost:9000/${endpoint}`)
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