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

  const {available_slots=[], image, name, specialization, experience, totalSlots, email, phone, skills} = trainer || {};

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
            <div className='absolute bg-black rounded-3xl bg-opacity-70 top-0 w-full h-full text-white flex items-center'>
              <div className='md:ml-10 ml-3 space-y-5 font-bold'>
              <p className='text-2xl font-bold'>Instructor</p>
              <h3 className='md:text-6xl text-4xl font-bold'>{name}</h3>
              <p className='text-2xl flex md:flex-row flex-col md:items-center font-bold'>Fitness<MdOutlineKeyboardDoubleArrowRight className="text-[#FF4D31] mx-1"/>Instructor <MdOutlineKeyboardDoubleArrowRight className="text-[#FF4D31] mx-1"/>{name}</p>
              {/* Details  */}
              <div className='space-y-1 text-gray-200 bg-black bg-opacity-60 p-2 rounded-lg'>
              <p><span>Experience: </span>{experience}</p>
              <p><span>Expertise: </span>{specialization}</p>
              <p><span>Total Slots: </span>{totalSlots}</p>
              <div>
              <span>Special Skills: </span>
              <span>
                {
                  skills.map((skill, index) => <span key={index}>{skill}, </span>)
                }
              </span>
              </div>
              <p>Contact Info:</p>
              <p><span>Email: </span>{email}</p>
              <p><span>Phone: </span>{phone}</p>
              </div>
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