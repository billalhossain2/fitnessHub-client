import React from 'react'
import useAuth from '../../hooks/useAuth';
import { AiOutlineLike } from "react-icons/ai";
import useAxiosInstance from '../../hooks/useAxiosInstance';

const ForumItem = ({forum}) => {
    const {user} = useAuth();
    const axiosInstance = useAxiosInstance()
    const {_id, title, date, author, image, content, likes} = forum;

    const handleLike = async()=>{
      const res = await axiosInstance.put(`/forums/${_id}`, {email:user?.email})
    }

  return (
    <div className='rounded-md border-2 border-[#ff4c314f] hover:border-[#FF4D31] duration-300 p-3 space-y-2 flex flex-col'>
    <div className='flex-grow'><img className='w-full h-40' src={image} alt="" /></div>
    <h3 className='font-bold text-[18px]'>{title}</h3>
    <p className='text-gray-500'>{content.split("").splice(0, 80).join("")}</p>
    <div className='flex justify-between items-center'>
    <span className='text-[#FF4D31] font-bold cursor-pointer hover:underline'>Read More..</span>
    <div className='flex gap-5'>
    <button onClick={handleLike} className='flex items-center gap-1 hover:text-[#FF4D31]'><AiOutlineLike className='text-2xl'/><span>Like</span></button>
    <p>Liked: {likes || 0}</p>
    </div>
    </div>
    </div>
  )
}

export default ForumItem