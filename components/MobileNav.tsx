// import ClickAwayListener  from "react-click-away-listener"
import React, { useState } from 'react'
import black from '../public/logo/logo_dark.png'
import white from '../public/logo/logo_white.png'
import ClickAwayListener from 'react-click-away-listener'
import Image from 'next/image'
import Link from 'next/link'






const Modal = ( { openModal, toggleModal }: any ) => {
    return (
        <>

            <div className=" dark:bg-black/40 bg-white/90 absolute top-16 z-10 text-black/30 border dark:border-gray-700 backdrop-blur-lg px-4 drop-shadow-xl flex py-4  w-[90%]  rounded-2xl ">
                <ul className=" w-full flex space-y-6 flex-col">
                    <div className=" w-full px-4">
                        <div className=" flex flex-col space-y-3">
                            <Link href={'/jobs'} onClick={toggleModal} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 stroke-slate-700 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className=' dark:text-slate-400'>Jobs</p>
                            </Link>

                            <Link href={'/blog'} onClick={toggleModal} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 stroke-slate-700 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                                <p className=' dark:text-slate-400'>Blog</p>
                            </Link>

                            <Link href={'/genai'} onClick={toggleModal} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 stroke-slate-700 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>
                                <p className=' dark:text-slate-400'>AI Database</p>
                            </Link>
                        </div>
                    </div>

                    <hr className='' />
                    {/* <p className=' font-logo text-lg border-b dark:text-white dark:border-gray-700 py-2'>Apps </p> */}
                    <li className=" w-full flex items-start">
                        <button onClick={openModal} className=" relative space-x-4 border text-green-950 border-gray-300 dark:border-gray-700 text-lg dark:text-white self-start flex font-semibold rounded-lg px-5 py-4 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                            <p>Community</p>
                            <small className=' -top-2 bg-green-400/40
                             rounded-full px-2  absolute right-4 text-sm tracking-wide'>Comming Soon</small>
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


                </ul>
            </div>

        </>
    )
}



const MobileNav = ( { openModal }: any) => {
const [modal, setModal] = useState<boolean>(false)



const closing = () => {
    return setModal(false)
}


const toggleModal = () => {
        setModal(prev => !prev)
}
    return (
    <>
    <div className={`sticky flex flex-col space-y-6 md:hidden z-50  shadow-lg top-0 w-full`}>

        <ClickAwayListener onClickAway={ closing }>

        <div className=" flex justify-between bg-white relative dark:bg-black border-b dark:border-gray-600 items-center px-6   py-3">
      <Link href={'/'} className=' p-3 flex space-x-3 items-center'>
          <h2 className=' dark:text-white text-gray-900 font-logo font-bold tracking-wide'>Chemcider Inc</h2>
      </Link>

        <div className="">
            <button onClick={toggleModal} className='p-1 focus:outline-none active:bg-transparent text-white'>   
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

            { modal   && <Modal openModal={openModal} toggleModal={toggleModal} />  }
    </div>


        </ClickAwayListener>
    </div>
    
    </>
    )
}


export default MobileNav