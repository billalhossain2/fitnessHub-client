import React from 'react'
import { Link } from 'react-router-dom';

const BlogItem = ({blog}) => {
 const {title, date, author, image, content} = blog;
  return (
    <div className='rounded-md border-[1px] border-gray-300 p-3 space-y-2'>
        <img className='w-full h-48' src={image} alt="" />
        <h3 className='font-bold text-[20px]'>{title}</h3>
        <p className='font-medium'>{date}</p>
        <p className='font-medium'>{author}</p>
        <p className='text-gray-500'>{content}</p>
        <Link to="/forums">
        <button className='border-[1px] border-[#FF4D31] px-4 py-2 rounded-md text-[#FF4D31] font-medium hover:bg-[#FF4D31] hover:text-white duration-300 mt-3'>Explore More</button>
        </Link>
    </div>
  )
}

export default BlogItem