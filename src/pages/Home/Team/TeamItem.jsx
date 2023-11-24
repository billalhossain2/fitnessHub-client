import React from 'react'

const TeamItem = ({team}) => {
  const {name, role, experience, description, image} = team;
  return (
    <div className='border-[1px] border-gray-300 p-3 rounded-md space-y-1'>
        <img className='h-48 w-full' src={image} alt="Team Member" />
        <h3 className='font-bold text-2xl'>{name}</h3>
        <h4 className='font-medium'>Role: {role}</h4>
        <p className='font-medium'>Experience: {experience}</p>
    </div>
  )
}

export default TeamItem