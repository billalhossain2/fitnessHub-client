

const SlotBookedDetails = () => {
    const slotBookedBy = JSON.parse(localStorage.getItem("slotBookedBy"))
  return (
    <div className='mt-10'>
        <h3 className='text-2xl font-medium my-5'>Booked Members</h3>
        <div className='flex gap-5'>
        {
            slotBookedBy?.map(item => (
                <div className='border-[1px] border-gray-400 rounded-lg p-3 space-y-2 bg-[#c6d18d]'>
                    <p><span className='font-bold me-1'>Package:</span>{item.plan}</p>
                    <h3><span className='font-bold me-1'>Name:</span>{item?.memberName}</h3>
                    <p><span className='font-bold me-1'>Email:</span>{item.memberEmail}</p>
                    <p><span className='font-bold me-1'>Slot:</span>{item.bookedSlot}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default SlotBookedDetails