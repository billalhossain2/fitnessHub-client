import { useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin"
import { useEffect } from "react";

const AdminRoute = ({children}) => {
  const {adminLoading, error, isAdmin} = useAdmin();
  const navigate = useNavigate()

  if(isAdmin){
    return children
  }else{
      navigate("/")
  }

}

export default AdminRoute