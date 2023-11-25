import React from 'react'

const ForumItem = ({forum}) => {
    const {title, date, author, image, content} = forum;
  return (
    <div className='rounded-md border-2 border-[#ff4c314f] hover:border-[#FF4D31] duration-300 p-3 space-y-2 flex flex-col'>
    <div className='flex-grow'><img className='w-full h-40' src={image} alt="" /></div>
    <h3 className='font-bold text-[18px]'>{title}</h3>
    <p className='text-gray-500'>{content.split("").splice(0, 80).join("")} <span className='text-[#FF4D31] font-bold cursor-pointer hover:underline'>Read More..</span></p>
    </div>
  )
}

export default ForumItem