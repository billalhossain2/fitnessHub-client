import React from "react";
import { MdOutlineCancel } from "react-icons/md";
const Modal = ({isOpen, setIsOpen, trainer, handleConfirm, handleReject}) => {
    const {name, image, experience, specialization, email, phone} = trainer || {};
  return (
    <div>
      <dialog id="my_modal_1" className="modal" open={isOpen}>
        <div className="modal-box">
          <div className="relative">
            <MdOutlineCancel onClick={()=>setIsOpen(false)} className="absolute bg-red-500 rounded-full top-[-25px] p-1 z-30 text-white text-4xl right-[-25px] cursor-pointer"/>
          </div>
          <img className="w-[150px] h-[150px] rounded-full p-2 border-orange-500" src={image} alt="" />
          <h3 className="py-4">{name}</h3>
          <div className="">
          <p><span className="font-bold">Email:</span> {email}</p>
          <p><span className="font-bold">Phone:</span> {phone}</p>
          <p><span className="font-bold">Experience:</span> {experience}</p>
          <p><span className="font-bold">Expertise:</span> {specialization}</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleConfirm} className="btn bg-orange-500 hover:bg-orange-700 text-white me-2">Confirm</button>
              <button onClick={handleReject} className="btn bg-red-500 hover:bg-red-700 text-white">Reject</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
