import React from 'react'

const TableRow = ({trainer, index}) => {
    const {name, image, specialization, phone, email} = trainer || {};
    const handlePay = ()=>{
      alert("Pay now")
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
    <th>
      <button onClick={handlePay} className="border-[1px] border-[#C8D96F] text-gray-800 px-4 py-2 hover:bg-[#525D1D] hover:text-white rounded-md duration-300">Pay</button>
    </th>
  </tr>
  )
}

export default TableRow