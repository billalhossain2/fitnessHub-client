import React, { useEffect } from 'react'
import useTitle from '../../../../hooks/useTitle'
import TableRow from './TableRow'
import useLoadData from '../../../../hooks/useLoadData'
import useAppliedTrainers from '../../../../hooks/useAppliedTrainers'
import Spinner from '../../../../components/Spinner'

const AppliedTrainers = () => {
  useTitle("FitnessHub | Applied Trainers")
  // const {loading, error, data:allTrainers} = useLoadData("applied-trainers?application=pending")
  const {isLoading, isError, data:appliedTrainers=[], refetch} = useAppliedTrainers();
  useEffect(()=>{
    refetch()
  }, [])
  return (
    <div className="bg-gray-100 w-full h-full">
    <h3 className='lg:text-5xl md:text-4xl text-3xl font-bold text-center my-10'>Applied Trainers</h3>

    {/* Applied Trainers Table  */}
    {
      isLoading ? <Spinner></Spinner> : <div className="overflow-x-auto w-[90%] mx-auto">
      <div className="mb-8">
        <h3 className="md:text-2xl font-semibold">Total Applied Trainers: {appliedTrainers?.length}</h3>
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
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      appliedTrainers?.map((trainer, index) => <TableRow key={trainer._id} index={index} trainer={trainer}></TableRow>)
     }
    </tbody>
  </table>
</div>
    </div>
    }
  </div>
  )
}

export default AppliedTrainers