import React from 'react'
import useTitle from '../../../../hooks/useTitle'
import useLoadData from '../../../../hooks/useLoadData'

const AllSubscribers = () => {
  useTitle("FitnessHub | All Subscribers")
  const {loading, error, data:subscribers=[]} = useLoadData("subscriptions");
  return (
    <div className="bg-gray-100 w-full h-full">
    <h3 className='lg:text-5xl md:text-4xl text-3xl font-bold text-center my-10'>All Subscribers</h3>

    {/* Users Table  */}
    <div className="overflow-x-auto w-[90%] mx-auto">
      <div className="mb-8">
        <h3 className="md:text-2xl font-semibold">Total Subscribers: 0</h3>
      </div>
      <table className="table">
        {/* head */}
        <thead className="bg-[#C8D96F] text-black text-[14px] font-bold uppercase">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {subscribers?.map((user, index) => (
            <tr key={user._id} className="border-b-2 border-gray-200">
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default AllSubscribers