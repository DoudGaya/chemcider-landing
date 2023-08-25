import React, { useState } from 'react'
import Image from 'next/image'
import chemcider from '../public/chemcider.png'
import Link from 'next/link'
import chemciderDark from '../public/chemcider_dark 1.png'
import { useContext } from 'react'
import { NavContext } from './context/NavContext'

const MobileNav = () => {


    const {updateNav, setNav, nav}:  any = useContext(NavContext)


    const toggleModal = () => {
       return updateNav()
    }
    return (
    <>
    <div className={`sticky flex flex-col space-y-6 md:hidden z-30 top-0 w-full`}>
        <div className=" flex justify-between bg-white dark:bg-black dark:border-slate-600 relative border-b items-center px-6 py-6">
            <Link href={'/'} className='p-3 flex space-x-3 items-center'>
            <div className="h-4 flex items-center overflow-hidden">
                <Image src={chemcider} alt="Chemcider Inc" className=" block h-5 object-contain object-left dark:hidden" />
                <Image src={chemciderDark} alt="Chemcider Inc" className="hidden h-5 object-contain object-left dark:block" />
            </div>
      </Link>

        <div className="">
            <button onClick={toggleModal} className='p-1 focus:outline-none active:bg-transparent text-white'>   
                {
                nav
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
    </div>
    
    </>
    )
}


export default MobileNav