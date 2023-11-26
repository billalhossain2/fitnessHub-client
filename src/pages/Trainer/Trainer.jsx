import React from 'react'
import useTitle from '../../hooks/useTitle'
import TrainerCard from './TrainerCard'
import { Link } from 'react-router-dom';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';
import useLoadData from '../../hooks/useLoadData';


const Trainer = () => {
    useTitle('FitnessHub | Trainer')

    const {loading, error, data:trainers} = useLoadData("trainers");

    if(error){
      return <Error error={error}></Error>
    }
  
    if(loading){
      return <Spinner></Spinner>
    }


  return (
    <div>
        <div className='relative mb-5'>
            <img className='w-full h-96' src="https://i.ibb.co/RpjysL8/galler-cover.jpg" alt="Gallery" />
            <p className='absolute bg-black bg-opacity-80 top-0 background-opacity-50 w-full h-full text-white font-bold text-4xl flex items-center justify-center'>Our Trainers</p>
        </div>

        {/* trainers container  */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {
            trainers.map((trainer, index) => <TrainerCard key={index} trainer={trainer}></TrainerCard>)
          }
        </div>

        <div className='flex justify-center mt-10'>
        <Link to="/trainer-form">
        <button className='bg-[#EE62C5] hover:bg-[#bb4497] text-white font-bold px-4 py-2 rounded-md'>Become A Trainer</button>
        </Link>
        </div>
    </div>
  )
}

export default Trainer