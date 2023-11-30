import { useEffect, useState } from "react";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
        axiosSecure.get(`users?email=${user?.email}`)
        .then(res => {
            setIsAdmin(res.data.role==="admin");
            setAdminLoading(false)
            setError("")
        })
        .catch(error =>{
            setError(error)
            setAdminLoading(false)
        })
    }, [axiosSecure])
    return {isAdmin, adminLoading, error}
}

export default useAdmin