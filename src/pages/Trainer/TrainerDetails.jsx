import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import BookItem from './BookItem';
import useTitle from '../../hooks/useTitle';
import { useParams } from 'react-router-dom';
import useLoadData from '../../hooks/useLoadData';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';
const TrainerDetails = () => {
  useTitle("FitnessHub | Trainer Details")
  const {trainerId} = useParams();
  const {loading, error, data:trainer} = useLoadData(`trainers/${trainerId}`);

  const {available_slots=[], image, name, specialization} = trainer || {};

  if(error){
    return <Error></Error>
  }

  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <div>
       <div className='relative'>
            <img className='w-full h-[500px] rounded-3xl' src={image} alt="Gallery" />
            <div className='absolute bg-black rounded-3xl bg-opacity-50 top-0 w-full h-full text-white flex items-center font-bold'>
              <div className='md:ml-10 ml-3 space-y-5'>
              <p className='text-2xl'>Instructor</p>
              <h3 className='md:text-6xl text-4xl'>{name}</h3>
              <p className='text-2xl flex md:flex-row flex-col md:items-center'>Fitness<MdOutlineKeyboardDoubleArrowRight className="text-[#FF4D31] mx-1"/>Instructor <MdOutlineKeyboardDoubleArrowRight className="text-[#FF4D31] mx-1"/>{name}</p>
              </div>
            </div>
       </div>

       <div>
        <h3 className='text-3xl text-center mt-10 mb-1 font-bold'>Available Slots for Jhon Smith</h3>
        <p className='text-center mb-5 font-medium text-[#FF4D31]'>---Please Book A Service---</p>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
          {
            available_slots?.map((slot, index) => <BookItem key={index} slot={slot} trainer={trainer}></BookItem>)
          }
        </div>
       </div>
    </div>
  )
}

export default TrainerDetails