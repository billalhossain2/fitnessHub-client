import useTrainer from '../hooks/useTrainer';
import { useNavigate } from 'react-router-dom';

const TrainerRoute = ({children}) => {
    const {trainerLoading, error, isTrainer} = useTrainer();
    const navigate = useNavigate()
  
    if(isTrainer){
      return children
    }else{
      navigate("/")
    }
}

export default TrainerRoute