import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { slotContext } from '../../providers/SlotProvider'

const BookItem = ({slot, trainer}) => {
  const {setBookedSlot} = useContext(slotContext) || {}
  const handleBookSlot = ()=>{
    setBookedSlot(slot)
  }
  return (
    <div className='flex flex-col justify-center items-center gap-5 border-2 shadow-md border-[#ff4c311a] rounded-md p-4'>
    <p className='text-[20px] font-bold text-[#FF4D31]'>Fitness Training</p>
    <p className='text-[20px] font-bold'>{slot}</p>
    <Link to={`/trainer-booking/${trainer._id}`}>
    <button onClick={handleBookSlot} className='px-4 py-2 font-bold border-[1px] border-[#FF4D31] text-[#FF4D31] hover:bg-[#FF4D31] hover:text-white duration-300 rounded-lg'>Book Now</button>
    </Link>
    </div>
  )
}

export default BookItem