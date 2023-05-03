// import ClickAwayListener  from "react-click-away-listener"
import React, { useState } from 'react'
import black from '../public/logo/logo_dark.png'
import white from '../public/logo/logo_white.png'
import ClickAwayListener from 'react-click-away-listener'
import Image from 'next/image'


const MobileNav = ( { openModal }: any) => {
const [modal, setModal] = useState<boolean>(false)


// const closeModal = () => {
//     return setModal((prev) => { return prev = false})
// }

const toggleModal = () => {
        setModal(prev => !prev)
}
    return (
    <>
    <div className={`fixed flex flex-col space-y-6 md:hidden z-50 shadow-lg   top-0 w-full`}>
    <div className=" flex justify-between  bg-white dark:bg-black border-b dark:border-gray-600 items-center px-6   py-1">
      <button onClick={ () => {window.scrollTo(0, 0)} } className=' p-3 flex space-x-3 items-center'>
          <h2 className=' dark:text-white text-gray-900 font-logo font-bold tracking-wide'>Chemcider Inc</h2>
      </button>
    <div className="">
            <button onClick={toggleModal} className='p-1 text-white'>
            
            {
            
            modal
            
            ?
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-black dark:stroke-slate-100 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            
            :
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-black dark:stroke-slate-100 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
            }
            </button>
      </div>
    </div>

    {
        modal 
        
        &&

            <div className=" dark:bg-black/40 bg-white/80 text-black border dark:border-gray-400 backdrop-blur-lg px-4 drop-shadow-xl flex py-10  w-[90%]  h-[85vh] mx-auto rounded-2xl ">
            <ul className=" w-full space-y-6">
                <p className=' font-logo text-lg border-b dark:border-gray-400 py-2'>Apps </p>
                <li className=" w-full flex items-start ">
                    <button onClick={openModal} className="  self-start flex font-semibold rounded-lg px-5 py-4 w-full">
                        Community 
                    </button>
                </li>
                <li className=" w-full flex">
                    <button onClick={openModal} className=" self-start flex  font-semibold rounded-lg px-5 py-4 w-full">
                        generative AIs
                    </button>
                </li>
                <li className=" w-full flex">
                    <button onClick={openModal} className=" self-start flex  font-semibold rounded-lg px-5 py-4 w-full">
                        Store
                    </button>
                </li>
                <li className=" w-full flex">
                    <button onClick={openModal} className=" self-start flex font-semibold rounded-lg px-5 py-4 w-full">
                        Jobs 
                    </button>
                </li>
                <hr className=' border-gray-400 py-2' />

                {/* <li >
                    Some more contents 
                </li> */}
            </ul>
            </div>
       }
       
  </div>
    
    </>
    )
}


export default MobileNav