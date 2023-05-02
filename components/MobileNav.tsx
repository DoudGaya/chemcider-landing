// import ClickAwayListener  from "react-click-away-listener"
import React, { useState } from 'react'
import black from '../public/logo/logo_dark.png'
import white from '../public/logo/logo_white.png'
import Image from 'next/image'


const MobileNav = ( { openModal }: any) => {
const [modal, setModal] = useState<boolean>(false)

const switchModal = () => {
   return setModal(prev => !prev)
}

const toggleModal = () => {

   return setModal(prev => !prev)
}


    return (
    <>
    <div className="fixed flex flex-col space-y-6 md:hidden z-50 px-6 border-b shadow-lg  py-1 bg-white dark:bg-black top-0 w-full ">

    <div className=" flex justify-between items-center  rounded-lg  py-1">
      <button onClick={() => {window.scrollTo(0, 0)} } className=' p-3 flex space-x-3 items-center'>
          {/* <Image src={black} alt='Chemcider Logo' width={20} height={20} className='dark:hidden block w-full h-full object-cover ' />
          <Image src={white} alt='Chemcider Logo' width={20} height={20} className='hidden dark:block w-full h-full object-cover ' /> */}

          <h2 className=' dark:text-white text-gray-900 font-logo font-bold tracking-wide'>Chemcider Inc</h2>
      </button>
    <div className="">
        <button onClick={toggleModal} className='p-1 text-white'>
            {
            modal ?
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
        modal ?
            <div className=" bg-[rgb(21,113,173)] px-4 flex items-center py-3 h-[400px] rounded-md ">
            <ul className=" w-full my-auto space-y-6">
                <li className=" w-full flex">
                    <button onClick={openModal} className=" text-slate-100 text-lg font-semibold bg-[rgb(28,71,100)] rounded-lg px-5 py-4 w-full">
                        Community 
                    </button>
                </li>
                <li className=" w-full flex">
                    <button onClick={openModal} className=" text-slate-100 text-lg font-semibold bg-[rgb(28,71,100)] rounded-lg px-5 py-4 w-full">
                        generative AIs
                    </button>
                </li>
                <li className=" w-full flex">
                    <button onClick={openModal} className=" text-slate-100 text-lg font-semibold bg-[rgb(28,71,100)] rounded-lg px-5 py-4 w-full">
                        Store
                    </button>
                </li>
                <li className=" w-full flex">
                    <button onClick={openModal} className=" text-slate-100 text-lg font-semibold bg-[rgb(28,71,100)] rounded-lg px-5 py-4 w-full">
                        Jobs 
                    </button>
                </li>
            </ul>
            </div>
    :
    '' 
       }
  </div>
        </>
    )
}


export default MobileNav