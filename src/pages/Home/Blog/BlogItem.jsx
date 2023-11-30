import React from 'react'
import { Link } from 'react-router-dom';

const BlogItem = ({blog}) => {
 const {title, date, author, image, content} = blog;
  return (
    <div className='rounded-md border-[1px] border-gray-300 p-3 flex flex-col justify-center'>
        <img className='w-full h-[100px]' src={image} alt="" />
        <div>
        <h3 className='font-bold text-[17px]'>{title}</h3>
        <p className='font-medium'>{date}</p>
        <p className='font-medium'>{author}</p>
        <p className='text-gray-500'>{content.split("").slice(0, 50).join("")}...</p>
        </div>
        <Link to="/forums">
        <button className='border-[1px] border-[#FF4D31] px-4 py-2 rounded-md text-[#FF4D31] font-medium hover:bg-[#FF4D31] hover:text-white duration-300 mt-3'>Explore More</button>
        </Link>
    </div>
  )
}

export default BlogItem