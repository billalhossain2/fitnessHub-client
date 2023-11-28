import React, { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { slotContext } from "../../../providers/SlotProvider";
import { toast } from "react-toastify";

const PackagePlanCard = ({ item, trainer }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { bookedSlot } = useContext(slotContext) || {};
  const { plan, classes, facilities, price } = item || {};

  const handleJoin = async () => {
    const bookedInfo = {
      ...item,
      bookedSlot,
      trainerEmail: trainer.email,
      trainerId: trainer._id,
      bookedBy: {
        name: user?.displayName,
        email: user?.email,
        photoUrl: user?.photoURL,
      },
    };
    console.log("bookedInfo=========> ", bookedInfo);
    try {
      const res = await axiosSecure.post("/booked-trainers", bookedInfo);
      toast.success('Booking was successful', {autoClose:2000})
    } catch (error) {
        toast.error(error.message, {autoClose:2000})
    }
  };
  return (
    <div className="border-[1px] border-gray-300 p-3 rounded-md bg-blue-100 relative h-[450px]">
      <h3 className="text-2xl font-bold">{plan}</h3>
      <h3 className="font-bold mt-5">Classes:</h3>
      <ul className="list-disc pl-5">
        {classes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="font-bold mt-5">Facilities:</h3>
      <ul className="list-disc pl-5">
        {facilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="my-2 text-orange-500 text-[20px]">
        <span className="font-bold">Price:</span> ${price} / Per Month
      </h3>
      <button
        onClick={handleJoin}
        className="border-[1px] border-orange-500 text-orange-500 font-bold rounded-md px-5 py-2 hover:bg-orange-500 hover:text-white duration-300 absolute bottom-3"
      >
        Join Now
      </button>
    </div>
  );
};

export default PackagePlanCard;
