import React from "react";
import useTitle from "../../../../hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useBalance from "../../../../hooks/useBalance";
import getTotalBalance from "../../../../utils/getTotalBalance";
import useTrainerPayments from "../../../../hooks/useTrainerPayments";
import getTotalTrainerPayments from "../../../../utils/getTotalTrainerPayments";
import PiechartComponent from "./Piechart/PiechartComponent";
import moment from "moment/moment";


const Balance = () => {
  useTitle("FitnessHub | Balance");
  const axiosSecure = useAxiosSecure();


  //Get All Subscribers
  const {data:subscribers} = useQuery({
    queryKey:["TOTAL_NEWS_LETTER"],
    queryFn:async()=>{
      const res = await axiosSecure.get("/subscriptions");
      return res.data;
    }
  })


  //Get All Paid Members
  const {data:paidMembers} = useQuery({
    queryKey:["ALL_PAID_MEMBERS"],
    queryFn:async()=>{
      const res = await axiosSecure.get("/booking-payments");
      return res.data;
    }
  })

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
  console.log(subscirberVsMembers)

  const {data:bookingPayments} = useBalance();
  const {data:trainerPayments} = useTrainerPayments();

  const totalTrainerPayments = getTotalTrainerPayments(trainerPayments)
  const totalRemainingBalance = getTotalBalance(bookingPayments, totalTrainerPayments);



  return (
    <div>
      <div className="flex gap-5">
        <div className="bg-orange-500 p-3 rounded-md text-center text-white space-y-2">
          <h3 className="font-bold text-2xl">Remaining Balance</h3>
          <p className="text-3xl font-bold">${totalRemainingBalance}</p>
        </div>

        <div className="bg-orange-500 p-3 rounded-md text-center text-white space-y-2">
          <h3 className="font-bold text-2xl">Total Payment</h3>
          <p className="text-3xl font-bold">${totalTrainerPayments}</p>
        </div>
      </div>
      {/* Pie chart  */}
      <PiechartComponent subscirberVsMembers={subscirberVsMembers}></PiechartComponent>
      <div></div>


      {/* 6 members who paid  */}
      <div className="text-2xl font-bold text-gray-600 text-center mt-10">Paid Members</div>
      <table className="border border-slate-400 mt-1 mb-10">
        <thead className="bg-orange-500 mt-10">
          <th className="p-5 font-bold text-[18px]">Email</th>
          <th className="p-5 font-bold text-[18px]">Paid</th>
          <th className="p-5 font-bold text-[18px]">Date</th>
        </thead>
        <tbody>
            {
              paidMembers?.slice(0, 6)?.map(item => (
                <tr className="border border-slate-400">
                  <td className="p-5">{item.email}</td>
                  <td className="p-5">{item.price}</td>
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
