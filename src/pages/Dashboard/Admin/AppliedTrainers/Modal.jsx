import React from "react";

const Modal = ({isOpen, setIsOpen, trainer}) => {
    const {name, image, experience, available_slots, totalSlots, specialization, email, phone, application} = trainer || {};
  return (
    <div>
      <dialog id="my_modal_1" className="modal" open={isOpen}>
        <div className="modal-box">


          <img className="w-full h-60" src={image} alt="" />
          <h3 className="py-4 text-2xl">{name}</h3>
          <div className="space-y-2">
          <p><span className="font-bold">Email:</span> {email}</p>
          <p><span className="font-bold">Phone:</span> {phone}</p>
          <p><span className="font-bold">Experience:</span> {experience}</p>
          <p><span className="font-bold">Expertise:</span> {specialization}</p>
          <p><span className="font-bold">Application Status:</span> {application}</p>
          </div>



          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={()=>setIsOpen(false)} className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
