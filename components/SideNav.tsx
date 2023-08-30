import { useState, useContext } from "react";
import { NavContext } from "./context/NavContext";
import Link from "next/link";
import {BsDiscord} from 'react-icons/bs'

export const SideNav = () => {
    const {nav, closeModal}: any = useContext(NavContext)


    const closingModal = () => {
        return closeModal()
    }
    return (
        <>
            {
                nav && 

                <div className=" h-screen  dark:bg-black/40 bg-white/90 fixed shadow-lg backdrop-blur-md top-0 left-0 z-50 text-black/30 border dark:border-gray-700 backdrop:shadow-slate-500/80 px-4 flex lg:hidden py-6  w-[70%]  rounded-2xl ">
                <ul className=" w-full flex space-y-6 flex-col">
                    <div className=" w-full px-4">
                        <div className=" flex flex-col space-y-3">
                            <Link onClick={closeModal} href={'/jobs'} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                                <p className=' dark:text-slate-400 text-xl'>Home</p>
                            </Link>

                            <Link onClick={closeModal} href={'/about'} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                                <p className=' dark:text-slate-400 text-xl'>About</p>
                            </Link>

                            <Link onClick={closingModal} href={'/store'} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                                <p className=' dark:text-slate-400 text-xl'>Store</p>
                            </Link>
                            <Link onClick={closingModal} href={'/learning'} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                                <p className=' dark:text-slate-400 text-xl'>Learning</p>
                            </Link>
                        </div>
                    </div>

                    <hr className='' />
                    {/* <p className=' font-logo text-lg border-b dark:text-white dark:border-gray-700 py-2'>Apps </p> */}
                      <div className=" w-full px-4">
                        {/* <div className=" flex flex-col space-y-3">
                            <Link onClick={closeModal} href={'/science'} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 stroke-slate-700 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className=' dark:text-slate-400'>Science</p>
                            </Link>

                            <Link onClick={closeModal} href={'/technology'} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 stroke-slate-700 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                                <p className=' dark:text-slate-400'>Technology</p>
                            </Link>

                            <Link onClick={closingModal} href={'/engineering'} className=' items-center space-x-4 text-slate-950 flex  py-3 flex-row rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 stroke-slate-700 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>
                                <p className=' dark:text-slate-400'>Engineering</p>
                            </Link>
                        </div> */}
                                <div className="">
                                <Link href={'https://discord.gg/RhGuDGSD'} className=" bg-primary space-x-3 flex items-center justify-center px-8 overflow-hidden rounded-md py-2">
                                <BsDiscord className=" h-8 w-8 flex-none" />
                                <p className="text-white flex-none"> Discord</p>
                            </Link> 
                        </div>
                    </div>

                </ul>
            </div>
            }

        </>
    )
}
