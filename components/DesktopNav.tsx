import Link from "next/link"
import { useState } from "react"
import chemcider from '../public/chemcider.png'
import chemciderDark from '../public/chemcider_dark 1.png'
import ClickAwayListener from "react-click-away-listener"
import Image from "next/image"
import {BsDiscord} from 'react-icons/bs'

const ModalBanner = () => {
    return (
        <>
        <ul className=" transition border dark:border-sky-300/30 dark:bg-black dark:text-gray-200 space-y-6 py-10 rounded-md border-sky-400 text-black  absolute w-[250px] -left-[165px] top-10 z-10 px-3 bg-white">
            <li className=" ">
               <button className="flex hover:bg-slate-100/70 dark:border-sky-300/30 dark:hover:bg-slate-950 py-1 border border-gray-100 relative rounded-lg w-full px-2 space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    <small className=" absolute -top-2 right-3 bg-emerald-300/40 dark:text-green-300 text-emerald-900/90 px-1 rounded-full text-xs">Comming soon</small>
                    <p className="py-2 font-ai">
                        Commmunity
                    </p>
                </button>
            </li>
            <li className=" flex space-x-3">
                <button className="flex hover:bg-slate-100/70 dark:border-sky-300/30 dark:hover:bg-slate-950 py-1 border border-gray-100 relative rounded-lg w-full px-2 space-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <small className=" absolute -top-2 right-3 bg-emerald-300/40 dark:text-green-300 text-emerald-900/90 px-1 rounded-full text-xs">Comming soon</small>
                    <p className="py-2 font-ai">
                        Resource Store
                    </p>
                </button>
            </li>
        </ul>
        </>
    )
}

export const DesktopNav = () => {

    const [modal, setModal] = useState(false)


    const toggleModal = () => {
       return setModal((prev) => {
           return prev = !prev
       })
    }


    const closeModal = () => {
        return setModal(false)
    }

    return (
        <>
          <div className=" dark:bg-black/80 items-center border-b border-primary bg-white text-black hidden z-50 sticky top-0  justify-between dark:text-white dark:border-slate-700 w-full xl:flex py-4 px-[100px]">
                   <Link href={'/'}>
                        <div className=" h-4 flex items-center overflow-hidden ">
                            <Image src={chemcider} alt="Chemcider Inc" className=" block h-5 object-contain object-left dark:hidden" />
                            <Image src={chemciderDark} alt="Chemcider Inc" className="hidden h-5 object-contain object-left dark:block" />
                        </div>
                   </Link>

                   <div className=" flex space-x-8 w-full px-3 items-center h-full">
                       <ul className=" flex space-x-10 h-full">
                           <li className=" h-full flex items-center my-auto">
                               <Link href={'/'} className=" hover:text-primary h-full tracking-wide">Home</Link>
                           </li>
                           <li className=" h-full flex items-center my-auto">
                               <Link href={'/about'} className="hover:text-primary h-full tracking-wide">About </Link>
                        </li>
                        {/* <li className=" h-full flex items-center my-auto">
                            <Link href={'/articles'} className="hover:text-primary h-full tracking-wide">Articles </Link>
                        </li> */}
                         <li className=" h-full flex items-center my-auto">
                            <Link href={'/store'} className="hover:text-primary h-full tracking-wide">Store</Link>
                        </li>
                           <li className=" h-full flex items-center my-auto">
                               <Link href={'/learning'} className="hover:text-primary h-full tracking-wide">Learning</Link>
                        </li>
                        
                        <li className=" w-full h-full flex items-center">

                            <Link href={'https://discord.gg/RhGuDGSD'} className=" bg-primary space-x-3 flex items-center justify-center px-8 overflow-hidden rounded-md py-2">
                                <BsDiscord className="h-8 w-8 fill-white flex-none" />
                                <p className="text-white flex-none"> Discord</p>
                            </Link> 
                        </li>
                       </ul>
                   </div>
                </div>
        </>
    )
}