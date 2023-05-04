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

            <div className=" dark:bg-black/40 bg-white/90 text-black/30 border dark:border-gray-700 backdrop-blur-lg px-4 drop-shadow-xl flex py-10  w-[90%]  h-[85vh] mx-auto rounded-2xl ">
            <ul className=" w-full space-y-6">
                <p className=' font-logo text-lg border-b text-white dark:border-gray-700 py-2'>Apps </p>
                <li className=" w-full flex items-start ">
                   
              
                   
                    <button onClick={openModal} className=" relative space-x-4 border text-green-950 border-gray-300 dark:border-gray-700 text-lg dark:text-white self-start flex font-semibold rounded-lg px-5 py-4 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                       <p>Community</p>
                       <small className=' -top-2 bg-green-400/40 rounded-full px-2  absolute right-4 text-sm tracking-wide'>Comming Soon</small>
                    </button>
                </li>
                <li className=" w-full flex">
                    <button onClick={openModal} className=" relative border text-green-950 border-gray-300 dark:border-gray-700 space-x-3 text-lg dark:text-white self-start flex  font-semibold rounded-lg px-5 py-4 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                      <p> Resource Store </p>
                      <small className=' -top-2 bg-green-400/40 rounded-full px-2  absolute right-4 text-sm tracking-wide'>Comming Soon</small>

                    </button>
                </li>
                {/* <li className=" w-full flex">
                    <button onClick={openModal} className=" text-lg dark:text-white self-start flex  font-semibold rounded-lg px-5 py-4 w-full">
                        Store
                    </button>
                </li>
                <li className=" w-full flex">
                    <button onClick={openModal} className=" self-start dark:text-white flex font-semibold rounded-lg px-5 py-4 w-full">
                        Jobs 
                    </button>
                </li> */}
                <hr className=' dark:border-gray-700 py-2' />

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