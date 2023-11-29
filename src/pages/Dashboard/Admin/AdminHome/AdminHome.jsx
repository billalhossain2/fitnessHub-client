import React from 'react'
import useAuth from '../../../../hooks/useAuth'

const AdminHome = () => {
    const {user} = useAuth();
  return (
    <div>
        <h1 className='text-2xl font-semibold text-gray-600'>Welcome Back, {user?.displayName}</h1>
    </div>
  )
}

export default AdminHome