import { createContext, useState } from "react";

export const slotContext = createContext();

const SlotProvider = ({children}) => {
    const [bookedSlot, setBookedSlot] = useState("")
  return (
    <slotContext.Provider value={{bookedSlot, setBookedSlot}}>
        {children}
    </slotContext.Provider>
  )
}

export default SlotProvider