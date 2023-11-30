import React, { useEffect, useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import getTotalBalance from "../../../../utils/getTotalBalance";
import getTotalTrainerPayments from "../../../../utils/getTotalTrainerPayments";
import PiechartComponent from "./Piechart/PiechartComponent";
import moment from "moment/moment";

import { FaBalanceScale } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const Balance = () => {
  useTitle("FitnessHub | Balance");
  const axiosSecure = useAxiosSecure();


  //Using native methods
  const [subscribers, setSubscribers] = useState([])
  const [paidMembers, setPaidMembers] = useState([])
  const [trainerPayments, setTrainerPayments] = useState([])

  // Get all subscribers 
  useEffect(()=>{
    axiosSecure.get("/subscriptions")
    .then(res => {
      setSubscribers(res.data)
    })
  }, [])


// Get all paid members 
  useEffect(()=>{
    axiosSecure.get("/booking-payments")
    .then(res => {
      setPaidMembers(res.data)
    })
  }, [])



  // Get all trainer payments 
  useEffect(()=>{
    axiosSecure.get("/trainer-payments")
    .then(res => {
      setTrainerPayments(res.data)
    })
  }, [])

  

  const subscirberVsMembers = [
    {
      name:'subscribers',
      value:subscribers?.length
    },
    {
      name:'paidMembers',
      value:paidMembers?.length
    }
  ]


  const totalTrainerPayments = getTotalTrainerPayments(trainerPayments)
  const totalRemainingBalance = getTotalBalance(paidMembers, totalTrainerPayments);



  return (
    <div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div className="bg-[#707e2a] p-3 rounded-md text-center text-white space-y-2">
          <div className="flex justify-center"><FaBalanceScale className="text-5xl"/></div>
          <h3 className="font-bold text-xl">Remaining Balance</h3>
          <p className="text-3xl font-bold">${totalRemainingBalance}</p>
        </div>

        <div className="bg-[#707e2a] p-3 rounded-md text-center text-white space-y-2">
        <div className="flex justify-center"><MdPayment className="text-5xl"/></div>
          <h3 className="font-bold text-xl">Total Payment</h3>
          <p className="text-3xl font-bold">${totalTrainerPayments}</p>
        </div>
      </div>


      {/* Pie chart  */}
      <PiechartComponent subscirberVsMembers={subscirberVsMembers}></PiechartComponent>
      <div></div>


      {/* 6 members who paid  */}
      <div className="text-2xl font-bold text-gray-600 text-center mt-10">Paid Members</div>
      
      <table className="border border-slate-400 mt-1 mb-10">
        <thead className="bg-[#707e2a] mt-10 text-white">
          <th className="p-5 font-bold text-[20px]">Email</th>
          <th className="p-5 font-bold text-[20px]">Paid</th>
          <th className="p-5 font-bold text-[20px]">Date</th>
        </thead>
        <tbody>
            {
              paidMembers?.slice(0, 6)?.map(item => (
                <tr className="border border-slate-400">
                  <td className="p-5">{item.email}</td>
                  <td className="p-5">$ {item.price}</td>
                  <td className="p-5">{moment(item.date).format('LL')}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
      
    </div>
  );
};

export default Balance;
