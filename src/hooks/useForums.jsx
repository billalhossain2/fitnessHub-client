import React from 'react'
import useAxiosInstance from './useAxiosInstance'
import { useQuery } from '@tanstack/react-query';

const useForums = () => {
  const axiosInstance = useAxiosInstance();
  const {} = useQuery({
    queryKey:["Forums"],
    queryFn:async()=>{
        axiosInstance.get(``)
    }
  });
}

export default useForums