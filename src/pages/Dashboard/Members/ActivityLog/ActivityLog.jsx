import React from 'react'
import useTitle from '../../../../hooks/useTitle'
import useLoadData from '../../../../hooks/useLoadData';
import useAuth from '../../../../hooks/useAuth';
import Spinner from '../../../../components/Spinner';

const ActivityLog = () => {
  useTitle("FitnessHub | Activity Log")
  const {user} = useAuth();
  const {loading, error, data:bookedTrainer} = useLoadData(`booked-trainers?memberEmail=${user?.email}`);

  const {trainerName, trainerEmail, bookedSlot, classes} = bookedTrainer || {};
  return (
    <div>
      <h3 className='text-2xl font-medium my-3'>Today's Activity</h3>
   {
    loading ? <Spinner></Spinner> : <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead className='bg-[#707e2c] text-white'>
        <tr>
          <th></th>
          <th>Trainer</th>
          <th>Trainer Email</th>
          <th>Class</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {/* row */}
        <tr>
          <th>1</th>
          <td>{trainerName}</td>
          <td>{trainerEmail}</td>
          <td>{classes && classes[0]}</td>
          <td>{bookedSlot}</td>
        </tr>
      </tbody>
    </table>
    </div>
   }
    </div>
  )
}

export default ActivityLog