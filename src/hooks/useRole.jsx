import { useEffect, useState } from 'react';
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user} = useAuth() || {};
    const axiosSecure = useAxiosSecure();
    const {isLoading, error, data} = useQuery({
        queryKey:["USER-ROLE", user?.email],
        queryFn:async()=>{
           const res = await axiosSecure.get(`/users?email=${user?.email}`)
           return res.data?.role;
        }
    })
    return {isLoading, error, data}
}

export default useRole