// import {CardElement, useElements, useStripe} from '../../src';

import { useStripe, useElements,  CardElement} from "@stripe/react-stripe-js";

import "./Common.css";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = ({paidAmount, trainerEmail, trainerId}) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const navigate = useNavigate();



  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);




  useEffect(()=>{
    if(paidAmount && paidAmount > 0){
      console.log("I am inside payment effect")
        axiosSecure.post("/create-payment-intent", {price:paidAmount})
    .then(res =>{
        console.log("Client secret=======> ", res.data)
        setClientSecret(res.data?.clientSecret)
    })
    }
  }, [axiosSecure, paidAmount])




  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
      toast.error(error.message, {autoClose:2000});
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      console.log(paymentMethod)
    }

      //confirm payment 
  const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method:{
        card:card,
        billing_details:{
            name:user?.displayName,
            email:user?.email
        }
    }
  })

  if(confirmError){
    console.log(confirmError)
    return;
  }else{
    console.log('PaymentIntet===========> ', paymentIntent)
    if(paymentIntent.status==="succeeded"){
        setTransactionId(paymentIntent.id);
        //Now save the payment info in database
        const paymentInfo = {
            name:user?.displayName,
            email:user?.email,
            transactionId:transactionId,
            date:new Date(),
            paidAmount:paidAmount,
        }
        const res = await axiosSecure.post("/trainer-payments", paymentInfo)
        toast.success("Payment was successful", {autoClose:2000})
        //Change payment status
        const statusRes = await axiosSecure.patch(`/change-payment-status/${trainerId}`)
        navigate("/dashboard/all-trainers")
    }
  }

  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="payment-button" type="submit" disabled={!stripe || !clientSecret}>
        Pay now
      </button>
    </form>
  );
};

export default CheckoutForm;