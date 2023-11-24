import React from 'react'

const Banner = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
        <div className='flex flex-col justify-center'>
        <div className='space-y-5'>
            <h3 className='text-5xl font-bold'>
                <span>Shape</span> <br /> <span className='text-[#FF4D31]'>Your Body</span>
                </h3>
            <p>Transform your body with our 'FitnessHub' service. Unleash your potential, achieve fitness goals, and embrace a healthier lifestyle. Start your journey to a stronger, confident you!</p>
            <button className='bg-[#FF4D31] px-4 py-2 font-bold text-white rounded-md'>Our Classes</button>
        </div>
        </div>
        <div>
            <img className='w-full rounded-lg' src="https://i.ibb.co/RHQKjg4/banner-img.jpg" alt="Banner Image" />
        </div>
    </div>
  )
}

export default Banner