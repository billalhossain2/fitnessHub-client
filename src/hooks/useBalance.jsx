import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

const useBalance = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  // const {isLoading, isError, data, refetch} = useQuery({
  //   queryKey:["REMAINING_BALANCE"],
  //   queryFn:async()=>{
  //       const res = await axiosSecure.get("/booking-payments");
  //       return res.data;
  //   }
  // })


  useEffect(()=>{
    axiosSecure.get("")
  }, [])
  return {isLoading, isError, data, refetch}
}

export default useBalance