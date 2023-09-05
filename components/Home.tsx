import { useState } from 'react'
import Community from './Community'
import Footer from '../parts/Footer'
import GenAI from '../parts/GenerativeAI'
import Joining from '../parts/Joining'
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
    <>
  <div className=" flex flex-col ">
        <Landing />
        <section className=" border-b border-slate-800">
            <div className=" xl:w-[1200px] mx-auto">
                <WhatWeDo />
            </div>
        </section>
              {/* <HomeBanner /> */}
      <div className="flex flex-col text-slate-900 dark:text-slate-100  w-full">
              {/* <Navigation /> */}
              {/* the community */}
      <section className=' bg-white dark:bg-black'>
        <div className=" md:w-full lg:w-[1200px] mx-auto">
            <Community />
          </div>
      </section>
              {/* end of community */}
              {/* PARTNERS */}
     <section className=' bg-slate-200 dark:border-t dark:border-slate-800 dark:bg-black'>
          <div className=' md:w-full lg:w-[1200px] mx-auto'>
            <Joining />
          </div>
      </section>
              {/* END OF PARTNERS */}
              {/* PARTNERS */}
     <section className=' border-y border-gray-700/40 dark:bg-slate-900' id='#genai'>
          <div className=' md:w-full lg:w-[1200px] mx-auto'>
           <GenAI />
          </div>
      </section>
              {/* END OF PARTNERS */}
              {/* THE STORE */}
      <section className=' w-full border-y border-gray-700/60 dark:bg-black py-10'>
        <div className=" md:w-full lg:w-[1200px] mx-auto ">
            <Store  />
          </div>
      </section>
              {/* END OF STORE */}

              {/* PARTNERS */}
      </div>
      </div>
      
    </>
  )
}

export default Main
