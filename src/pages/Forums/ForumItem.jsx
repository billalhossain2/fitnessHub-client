import React from 'react'

const ForumItem = ({forum}) => {
    const {title, date, author, image, content} = forum;
  return (
    <div className='rounded-md border-[1px] border-gray-300 p-3 space-y-2'>
    <img className='w-full h-48' src={image} alt="" />
    <h3 className='font-bold text-[20px]'>{title}</h3>
    <p className='font-medium'>{date}</p>
    <p className='font-medium'>{author}</p>
    <p className='text-gray-500'>{content}</p>
    </div>
  )
}

export default ForumItem