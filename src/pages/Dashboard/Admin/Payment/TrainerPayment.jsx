
import { useQuery } from '@tanstack/react-query'

import { toast } from 'react-toastify'

import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
import { Elements } from '@stripe/react-stripe-js'
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import getMonthsWorkedSalary from '../../../../utils/getMonthsWorkedSalary';

const TrainerPayment = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {trainerId} = useParams();
    console.log("from payment page trainer id=======> ", trainerId)
    const {data} = useQuery({
        queryKey:["BOOKED_ITEM", user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`trainers/${trainerId}`)
            return res.data;
        }
    })

    console.log("From triner payment page========> ", data)
    const {_id, name, image, joined_date, salary, email, phone, experience} = data || {};

    //get total payment for trainer 
    const totalSalaryToBePaid = getMonthsWorkedSalary(joined_date, salary);

    console.log("total payment==========> ", totalSalaryToBePaid)
    const handleConfirmPayment = async()=>{
        const res = await axiosSecure.post("/payments", data)
        toast.success("Payment was successful", {autoClose:2000})
    }

  return (
    <>
    <div className='flex justify-center mt-10'>
       <div className='border-[1px] border-gray-300 rounded-lg p-5 space-y-2'>
        <img className='w-[100px] h-[100px] rounded-full border-2 border-orange-500 p-1' src={image} alt="" />
       <p><span className='font-bold'>Name: </span>{name}</p>
        <p><span className='font-bold'>Email: </span>{email}</p>
        <p><span className='font-bold'>Experience: </span>{experience} years</p>
        <p><span className='font-bold'>Joining Date: </span>{joined_date}</p>
        <p><span className='font-bold'>Salary: </span>${salary} / Monthly</p>
        {/* <button onClick={handleConfirmPayment} className='border-[1px] border-orange-500 p-2 rounded-md font-bold text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>Confirm Payment</button> */}
       </div>
    </div>
    <Elements stripe={stripePromise}>
    <CheckoutForm paidAmount={totalSalaryToBePaid} trainerEmail={email} trainerId={_id}></CheckoutForm>
    </Elements>
    </>
  )
}

export default TrainerPayment