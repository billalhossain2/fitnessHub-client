import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle  } from "react-icons/fa";
import { Link } from 'react-router-dom';
const TrainerCard = ({trainer}) => {
  const {_id, name, image, experience, totalSlots, } = trainer;
  return (
    <div className='border-[1px] border-gray-500 p-3 rounded-md space-y-1'>
        <img className='w-full h-[200px]' src={image} alt="Trainer" />
        <h3 className='font-medium text-2xl'>{name}</h3>
        <p><span className='font-bold text-gray-600'>Experience:</span> {experience}</p>
        <p><span className='font-bold text-gray-600'>Available Time Slots:</span> {totalSlots} Hours</p>
        <div className='flex gap-3 pb-5 pt-2'>
        <FaFacebookF className='text-4xl border-2 border-[#FF4D31] rounded-full p-2 hover:bg-[#FF4D31] hover:text-white cursor-pointer  duration-300 text-[#FF4D31]'/>
        <FaTwitter className='text-4xl border-2 border-[#FF4D31] rounded-full p-2 hover:bg-[#FF4D31] hover:text-white cursor-pointer  duration-300 text-[#FF4D31]'/>
        <FaLinkedinIn className='text-4xl border-2 border-[#FF4D31] rounded-full p-2 hover:bg-[#FF4D31] hover:text-white cursor-pointer  duration-300 text-[#FF4D31]'/>
        <FaGoogle className='text-4xl border-2 border-[#FF4D31] rounded-full p-2 hover:bg-[#FF4D31] hover:text-white cursor-pointer  duration-300 text-[#FF4D31]'/>
        </div>
        <Link to={`/trainer-details/${_id}`}>
        <button className='px-4 py-2 rounded-md font-bold text-white bg-[#ff4c31]'>Know More</button>
        </Link>
    </div>
  )
}

export default TrainerCard