import React from 'react'

const FeaturedItem = ({feature}) => {
  const {title, description, image} = feature;
  return (
    <div className='border-gray-300 border-[1px] py-5 px-3 rounded-md flex flex-col justify-center items-center gap-5'>
      <img className='w-32 h-32' src={image} alt="feature image" />
      <h3 className='font-medium text-[20px]'>{title}</h3>
      <p className='text-gray-500 text-center'>{description}</p>
    </div>
  )
}

export default FeaturedItem