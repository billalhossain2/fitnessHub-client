import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAppliedTrainers from "../../../../hooks/useAppliedTrainers";
import { toast } from "react-toastify";
import Modal from "./Modal";
import useAuth from "../../../../hooks/useAuth";
import emailjs from "@emailjs/browser";
import axios from "axios";
const TableRow = ({ trainer, index }) => {
  const axiosSecure = useAxiosSecure();
  const { refetch } = useAppliedTrainers();
  const { user } = useAuth();
  const { _id, name, image, specialization, phone, email } = trainer || {};

  const templateParams = {
    from_name: user?.displayName,
    from_email: "billalbelal621@gmail.com",
    to_name: "FitnessHub",
    message: "Thanks for your message",
  };

  const form = (
    <form>
      <input type="text" value={user?.displayName} />
      <input type="email" value={user?.email} />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value="Demo text will go here..."
      ></textarea>
    </form>
  );

  //modal controlling state
  const [isOpen, setIsOpen] = useState(false);

  const handleShowDetails = () => {
    setIsOpen(true);
  };

  const handleConfirm = async () => {
    const res = await axiosSecure.patch(`/trainers/${_id}`);
    refetch();
    toast.success("Application was accepted successfully", { autoClose: 2000 });
  };

  const handleReject = async () => {
    var data = {
      service_id: "service_8iny2cr",
      template_id: "template_qe1gt8r",
      user_id: "_55VMXjdy5p3xXdD4",
      template_params: templateParams,
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log("successfully sent email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} trainer={trainer}></Modal>
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
          <button
            onClick={handleConfirm}
            className="border-[1px] border-[#C8D96F] text-gray-800 px-4 py-2 hover:bg-[#525D1D] hover:text-white rounded-md duration-300"
          >
            Confirm
          </button>
          <button
            onClick={handleReject}
            className="border-[1px] border-[#C8D96F] text-gray-800 px-4 py-2 hover:bg-[#525D1D] hover:text-white rounded-md duration-300"
          >
            Reject
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
