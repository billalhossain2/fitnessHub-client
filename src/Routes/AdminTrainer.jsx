import { useNavigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin'
import useTrainer from '../hooks/useTrainer';
import Spinner from '../components/Spinner';

const AdminTrainer = ({children}) => {
  const {isAdmin, adminLoading} = useAdmin();
  const {isTrainer, trainerLoading} = useTrainer()
  const navigate = useNavigate()
  console.log("Trainer private=======> ", isTrainer)

  if(adminLoading || trainerLoading){
    return <Spinner></Spinner>
  }

  if(isAdmin || isTrainer){
    return children
  }else{
    navigate("/")
  }
  
}

export default AdminTrainer