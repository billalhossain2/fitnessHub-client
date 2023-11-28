import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAppliedTrainers from "../../../../hooks/useAppliedTrainers";
import { toast } from "react-toastify";
import Modal from "./Modal";
import useAuth from "../../../../hooks/useAuth";
const TableRow = ({ trainer, index }) => {
  const axiosSecure = useAxiosSecure();
  const { refetch } = useAppliedTrainers();
  const { user } = useAuth();
  const { _id, name, image, specialization, phone, email } = trainer || {};

  //modal controlling state
  const [isOpen, setIsOpen] = useState(false);

  const handleShowDetails = () => {
    setIsOpen(true);
  };

  const handleConfirm = async () => {
    const res = await axiosSecure.patch(`/trainers/${_id}`);
    refetch();
    toast.success("Application was accepted successfully", { autoClose: 2000 });
    setIsOpen(false)
  };

  const handleReject = async () => {
    setIsOpen(false)
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        trainer={trainer}
        handleConfirm={handleConfirm}
        handleReject={handleReject}
      ></Modal>
      <tr>
        <td>{index + 1}</td>
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
        <td className="flex items-center justify-center gap-2">
          <button
            onClick={handleShowDetails}
            className="text-gray-500 hover:text-gray-900"
          >
            <MdOutlineRemoveRedEye className="text-3xl"></MdOutlineRemoveRedEye>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
