// import ClickAwayListener  from "react-click-away-listener"
import React, { useState } from 'react'


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
    <div className="fixed flex flex-col space-y-6 md:hidden z-50 px-6  py-6 bottom-0 w-full ">
        
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


    <div className=" flex justify-between items-center bg-[rgb(21,113,173)] drop-shadow-xl rounded-lg px-4 py-3">
      <button onClick={() => {window.scrollTo(0, 0)} } className=' flex space-x-3 items-center'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 stroke-slate-100 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
   

     


        <p className=' text-xl text-white'>Chemcider Inc</p>

      </button>
    <div className="">
        <button onClick={toggleModal} className='p-3'>
            {
            modal ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-slate-100 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-slate-100 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            }
        </button>
      </div>
    </div>
  </div>
        </>
    )
}


export default MobileNav