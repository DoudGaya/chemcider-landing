import React, { useState, createContext } from "react";
const NavContext = createContext({})

const NavProvider = ({ children }: { children: React.ReactNode }) => {

    const [nav, setNav] = useState<boolean>(false)

    const updateNav = () => {
        return setNav((prev) => {
            return !prev
        })
    }

    const closeModal = () => {
        return setNav(false)
    }



    return <NavContext.Provider value={{updateNav, nav, closeModal, setNav}}> {children} </NavContext.Provider>
}
export {NavContext, NavProvider}