import React from 'react'

const SectionTitle = ({title}) => {
    return (
        <div className='relative mb-10'>
            <h3 className='font-bold md:text-4xl text-3xl mt-20 pb-3'>{title}</h3>
            <p className='bg-[#FF4D31] h-[3px] absolute'></p>
        </div>
    )
}

export default SectionTitle