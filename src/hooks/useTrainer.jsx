import { useEffect, useState } from "react";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useTrainer = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [isTrainer, setIsTrainer] = useState(false);
    const [trainerLoading, setTrainerLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
        axiosSecure.get(`users?email=${user?.email}`)
        .then(res => {
            setIsTrainer(res.data.role==="trainer");
            console.log("I am inside trainer hook=========> ", res.data, res.data.role==="trainer")
            setTrainerLoading(false)
            setError("")
        })
        .catch(error =>{
            setError(error)
            setTrainerLoading(false)
        })
    }, [axiosSecure])
    return {isTrainer, trainerLoading, error}
}

export default useTrainer