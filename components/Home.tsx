

import { useState } from 'react'

import Community from './Community'
import Footer from '../parts/Footer'
import GenAI from '../parts/GenerativeAI'
import Jobs from '../parts/Jobs'
import Navigation from '../parts/Navigations'
import Partners from '../parts/Partners'
import Store from './Store'
import { Landing } from './Landing'
import { HomeBanner } from './HomeBanner'
import { WhatWeDo } from './WhoWeAre'


interface ModalFunc {
  closeModal: () => void
}



function Main(): JSX.Element {
  const [modal, setModal] = useState<boolean>(false);

  const closeModal = (): any => {
    return setModal(false)
  }
  
  const openModal = () => {
    return setModal(true)
  }


  return (
    <main>
  <div className=" flex flex-col ">
    <Landing />
    <div className=" xl:w-[1200px] mx-auto">
    <WhatWeDo />
    </div>
    {/* <HomeBanner /> */}
  <div className="flex flex-col text-slate-900 dark:text-slate-100  w-full">
    {/* <Navigation /> */}
    {/* the community */}
      <section className=' bg-white dark:bg-black'>
        <div className=" md:w-full lg:w-[1200px] mx-auto">
            <Community openModal={openModal} />
          </div>
      </section>
    {/* end of community */}

     {/* PARTNERS */}
     <section className=' bg-slate-200 dark:bg-black'>
          <div className=' md:w-full lg:w-[1200px] mx-auto'>
           <Jobs />
          </div>
      </section>
      {/* END OF PARTNERS */}

       {/* PARTNERS */}
     <section className='' id='#genai'>
          <div className=' md:w-full lg:w-[1200px] mx-auto'>
           <GenAI openModal={openModal} />
          </div>
      </section>
      {/* END OF PARTNERS */}

      {/* THE STORE */}
      <section className=' bg-slate-200 w-full dark:bg-black py-10'>
        <div className=" md:w-full lg:w-[1200px] mx-auto ">
            <Store openModal={openModal} />
          </div>
      </section>
      {/* END OF STORE */}

      {/* PARTNERS */}
        <section className=''>
          <div className=' md:w-full lg:w-[1200px] mx-auto'>
            <Partners />
          </div>
        </section>


           {/* PARTNERS */}
        <section className='bg-slate-200 w-full dark:bg-black py-10'>
          <div className=' md:w-full lg:w-[1200px] mx-auto'>
            <Footer />
          </div>
        </section>
  </div>
 </div>
    </main>
  )
}

export default Main
