import React, { useEffect, useState } from 'react'
import useTitle from '../../../../hooks/useTitle'
import TableRow from './TableRow'
import Spinner from '../../../../components/Spinner'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

const AllTrainers = () => {
  useTitle("FitnessHub | All Trainers")
  const axiosSecure = useAxiosSecure();
  
  const [allTrainers, setAllTrainers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    axiosSecure.get("applied-trainers?application=accepted")
    .then(res =>{
      setAllTrainers(res.data);
      setLoading(false)
    })
  }, [])

  
  return (
    <div className="bg-gray-100 w-full h-full">
    <h3 className='lg:text-5xl md:text-4xl text-3xl font-bold text-center my-10'>All Trainers</h3>

    {/* Trainers Table  */}
    {
      loading ? <Spinner></Spinner> : <div className="overflow-x-auto w-[90%] mx-auto">
      <div className="mb-8">
        <h3 className="md:text-2xl font-semibold">Total Trainers: {allTrainers?.length}</h3>
      </div>
      {/* Trainer Table  */}
      <div className="overflow-x-auto">
  <table className="table mb-10">
    {/* head */}
    <thead className="bg-[#C8D96F] text-black text-[14px] font-bold uppercase">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      allTrainers?.map((trainer, index) => <TableRow key={trainer._id} index={index} trainer={trainer}></TableRow>)
     }
    </tbody>
  </table>
</div>
    </div>
    }
  </div>
  )
}

export default AllTrainers