"use client"

import { createContext, useState } from "react";


export const SideContext = createContext();

export const SideProvider = ({children}) => {
    const [ toggle, setToggle] = useState(false)

    return(
        <SideContext.Provider value={{toggle, setToggle}}>
            {children}
        </SideContext.Provider>
    )
}
