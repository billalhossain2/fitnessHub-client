import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

const useAppliedTrainers = () => {
  const axiosSecure = useAxiosSecure();
  const {isLoading, isError, data, refetch} = useQuery({
    queryKey:["APPLIED_TRAINERS"],
    queryFn:async()=>{
        const res = await axiosSecure.get("applied-trainers?application=pending");
        return res.data;
    }
  })
  return {isLoading, isError, data, refetch}
}

export default useAppliedTrainers