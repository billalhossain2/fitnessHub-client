import React from 'react'
import SectionTitle from '../../../components/SectionTitle'

const NewsLetter = () => {
  return (
    <div className='border-[1px] border-gray-400 p-5 flex flex-col items-center justify-center py-20 mt-32 rounded-md'>
        <h3 className='mb-10 font-bold text-3xl'>NEWSLETTER SUBSCRIPTION</h3>
        <form className='flex md:flex-row flex-col gap-5'>
            <input className='outline-none border-[1px] px-3 py-2 rounded-md border-gray-500' type="text" placeholder='Enter Name'/>
            <input className='outline-none border-[1px] px-3 py-2 rounded-md border-gray-500' type="email" placeholder='Enter Email'/>
            <button className='px-5 py-3 rounded-md bg-[#FF4D31] font-bold text-white'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter