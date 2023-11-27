import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
const TableRow = ({trainer, index}) => {
    const {name, image, specialization, phone, email} = trainer || {};
    const handleShowDetails = ()=>{
        alert("Show Details")
    }
    const handleConfirm = ()=>{
        alert("Confirm")
    }

    const handleReject = ()=>{
        alert("Reject")
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
    <td className='flex items-center justify-center gap-2'>
      <button onClick={handleShowDetails} className="text-gray-500 hover:text-gray-900"><MdOutlineRemoveRedEye className='text-3xl'></MdOutlineRemoveRedEye></button>
      <button onClick={handleConfirm} className="border-[1px] border-[#C8D96F] text-gray-800 px-4 py-2 hover:bg-[#525D1D] hover:text-white rounded-md duration-300">Confirm</button>
      <button onClick={handleReject} className="border-[1px] border-[#C8D96F] text-gray-800 px-4 py-2 hover:bg-[#525D1D] hover:text-white rounded-md duration-300">Reject</button>
    </td>
  </tr>
  )
}

export default TableRow