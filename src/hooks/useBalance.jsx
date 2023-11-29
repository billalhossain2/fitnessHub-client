import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

const useBalance = () => {
  const axiosSecure = useAxiosSecure();
  const {isLoading, isError, data, refetch} = useQuery({
    queryKey:["REMAINING_BALANCE"],
    queryFn:async()=>{
        const res = await axiosSecure.get("/booking-payments");
        return res.data;
    }
  })
  return {isLoading, isError, data, refetch}
}

export default useBalance