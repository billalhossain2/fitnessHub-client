import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import BookItem from './BookItem';
const TrainerDetails = () => {
  return (
    <div>
       <div className='relative'>
            <img className='w-full h-[500px] rounded-3xl' src="https://i.ibb.co/RpjysL8/galler-cover.jpg" alt="Gallery" />
            <div className='absolute bg-black rounded-3xl bg-opacity-50 top-0 w-full h-full text-white flex items-center font-bold'>
              <div className='md:ml-10 ml-3 space-y-5'>
              <p className='text-2xl'>Instructor</p>
              <h3 className='md:text-6xl text-4xl'>John Smith</h3>
              <p className='text-2xl flex md:flex-row flex-col md:items-center'>Fitness<MdOutlineKeyboardDoubleArrowRight className="text-[#FF4D31] mx-1"/>Instructor <MdOutlineKeyboardDoubleArrowRight className="text-[#FF4D31] mx-1"/>John Smith</p>
              </div>
            </div>
       </div>

       <div>
        <h3 className='text-3xl text-center mt-10 mb-1 font-bold'>Available Slots for Jhon Smith</h3>
        <p className='text-center mb-5 font-medium text-[#FF4D31]'>---Please Book A Service---</p>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
        </div>
       </div>
    </div>
  )
}

export default TrainerDetails