import useAuth from '../../hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'
import CheckoutForm from './CheckoutForm'

import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
import { Elements } from '@stripe/react-stripe-js'

const Payment = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data} = useQuery({
        queryKey:["BOOKED_ITEM", user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`booked-trainers?memberEmail=${user?.email}`)
            return res.data;
        }
    })

    console.log("From payment page========> ", data)
    const {trainerName, bookedSlot, plan, memberName, memberEmail, price} = data || {};

    const handleConfirmPayment = async()=>{
        const res = await axiosSecure.post("/payments", data)
        toast.success("Payment was successful", {autoClose:2000})
    }

  return (
    <>
    <div className='flex justify-center mt-10'>
       <div className='border-[1px] border-gray-300 rounded-lg p-5 space-y-2'>
       <p><span className='font-bold'>Package: </span>{plan}</p>
        <p><span className='font-bold'>Trainer: </span>{trainerName}</p>
        <p><span className='font-bold'>Slot: </span>{bookedSlot}</p>
        <p><span className='font-bold'>Price: </span>${price}</p>
        <p><span className='font-bold'>Member: </span>{memberName}</p>
        <p><span className='font-bold'>Member Email: </span>{memberEmail}</p>
        {/* <button onClick={handleConfirmPayment} className='border-[1px] border-orange-500 p-2 rounded-md font-bold text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>Confirm Payment</button> */}
       </div>
    </div>
    <Elements stripe={stripePromise}>
    <CheckoutForm price={price}></CheckoutForm>
    </Elements>
    </>
  )
}

export default Payment