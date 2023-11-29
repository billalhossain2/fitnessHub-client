import React, { useEffect, useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Spinner from "../../../../components/Spinner";
import { useNavigate } from "react-router-dom";

import { FaRegClock } from "react-icons/fa";

const ManageSlots = () => {
  useTitle("FitnessHub | Manage Members");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [bookedMembers, setBookedMembers] = useState([]);
  const [trainerId, setTrainerId] = useState("")
  const [allSlots, setAllSlots] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axiosSecure
      .get(`members-booked?trainerEmail=${user?.email}`)
      .then((res) => {
        setBookedMembers(res.data);
        setTrainerId(res.data[0].trainerId)
        setLoading(false)
      });
  }, [user, axiosSecure]);


  useEffect(()=>{
    //Get Trainer
    if(trainerId){
      axiosSecure
      .get(`trainers/${trainerId}`)
      .then((res) => {
        setAllSlots(res.data.available_slots)
      });
    }
  }, [trainerId])

  const handleSlotBookedDetail = (slot)=>{
    const slotBookedMembers = bookedMembers.filter(member => member.bookedSlot === slot)
    localStorage.setItem('slotBookedBy', JSON.stringify(slotBookedMembers))
    navigate("/dashboard/slotBooked-details")
  }

  
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-600 mb-2">All Slots</h3>

     {
      loading ? <Spinner></Spinner> : <div className="grid grid-cols-3 gap-5 ">
      {
       allSlots?.map(slot => (
       <div className="border-gray-300 border-[1px] text-gray-200 rounded-lg p-3 flex flex-col items-center justify-center gap-3 bg-[#5d691f]">
         <FaRegClock className="text-3xl"></FaRegClock>
         <p>{slot}</p>
         <button onClick={()=>handleSlotBookedDetail(slot)} className="text-white font-bold border-[1px] border-[#899740] px-3 py-1 rounded-lg hover:bg-[#2c3112] duration-300">Details</button>
      </div>
       ))
      }
   </div>
     }
    </div>
  );
};

export default ManageSlots;
