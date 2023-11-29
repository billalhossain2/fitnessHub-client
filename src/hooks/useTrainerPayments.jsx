import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

const useTrainerPayments = () => {
  const axiosSecure = useAxiosSecure();
  const {isLoading, isError, data, refetch} = useQuery({
    queryKey:["TRAINER_PAYMENTS"],
    queryFn:async()=>{
        const res = await axiosSecure.get("/trainer-payments");
        return res.data;
    }
  })
  return {isLoading, isError, data, refetch}
}

export default useTrainerPayments