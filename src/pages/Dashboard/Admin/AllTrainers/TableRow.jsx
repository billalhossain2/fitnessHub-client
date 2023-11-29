import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import getMonthsWorkedSalary from '../../../../utils/getMonthsWorkedSalary';
import { toast } from 'react-toastify';

const TableRow = ({trainer, index}) => {
  const navigate = useNavigate();
    const {_id, name, joined_date, image, salary, specialization, phone, email, status} = trainer || {};
    const handlePay = ()=>{
      const paymentSalary = getMonthsWorkedSalary(joined_date, salary)

      if(paymentSalary <= 0){
        toast.warn("Payment is not allowed because he/she joined recently.", {autoClose:3000})
        return;
      }

      navigate(`/dashboard/trainer-payment/${_id}`)
    }
  return (
    <tr>
    <td>{index+1}</td>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm opacity-50">{specialization}</div>
        </div>
      </div>
    </td>
    <td>{email}</td>
    <td>{status === "paid" ? <span className='font-bold bg-green-500 text-white px-4 py-1 rounded-md font-bold'>Paid</span> : <span className='bg-orange-500 font-bold text-white px-2 py-1 rounded-md'>Pending</span>}</td>
    <th>
       <button disabled={status==="paid" ? true : false} onClick={handlePay} className="border-[1px] border-[#C8D96F] text-gray-800 px-4 py-2 hover:bg-[#525D1D] hover:text-white rounded-md duration-300">Pay</button>
    </th>
  </tr>
  )
}

export default TableRow