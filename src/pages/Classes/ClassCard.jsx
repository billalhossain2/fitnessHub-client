import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';
const ClassCard = ({classItem}) => {
  const {_id, image, price, startDate, classTitle} = classItem || {};
  return (
    <div className='border-[1px] border-gray-300 p-3 rounded-md space-y-3'>
    <img className='h-48 w-full' src={image} alt="Team Member" />
    <h3 className='font-bold text-[18px]'>{classTitle}</h3>
    <div className='flex gap-5 items-center'>
      <p className='flex items-center gap-1'><MdAccessTime className='text-3xl'/>1 Hour</p>
      <p className='flex items-center gap-1'><SlCalender />{startDate}</p>
    </div>
    <p className='font-bold text-[18px] text-[#ff4c31b2]'>${price} / Per Month</p>
    <Link to={`/class-details/${_id}`}>
    <button className='px-3 py-1 rounded-md bg-[#FF4D31] text-white mt-3'>Show Details</button>
    </Link>
</div>
  )
}

export default ClassCard