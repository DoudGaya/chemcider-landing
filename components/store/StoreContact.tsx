import React from 'react'
import Link from 'next/link'
import habib from '../../public/about/habib.jpg'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'


const ceoSocials = [
    {
        name: "WhatsApp",
        link: "https://wa.me/+2347060684224",
        icon: <FaWhatsapp className=' h-8  w-8' />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/habib-mustapha-adam-0996451b3/",
        icon: <AiOutlineLinkedin className=' h-8  w-8' />
    },
    {
        name: "Phone",
        link: "tel:+2347060684224",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        )
    },
]



export const StoreContact = () => {
  return (
      <div className=' flex flex-col px-8 py-2 space-y-6 max-w-5xl mx-auto my-10'>
          <div className=" py-2  border-b dark:border-slate-700">
              <h2 className=' text-2xl  text-center font-raleway'>While we are working on building our automated E-Commerce online Store, You can contact our sales department to buy from us</h2>
          </div>
          <div className=" flex flex-row justify-between ">
                <div className=" border-b py-6 border-primary flex flex-col justify-center text-center lg:text-start space-y-6 px-6 lg:flex-row my-6 max-w-3xl w-full mx-auto items-center space-x-6">
                  <div className=" h-[200px] w-[200px] rounded-full border-primary border-4 shadow-inner overflow-hidden ">
                      <Image src={habib} alt='Abdulrahman Dauda Gaya' className=' overflow-hidden h-full w-full rounded-lg object-cover ' />
                  </div>
                  <div className=" flex flex-col space-y-1">
                      <p className=' font-thin font-raleway'>Senior Sales Manager at Chemcider Inc</p>
                      <h2 className=' text-xl lg:text-3xl font-bold font-logo text-primary'>Habib Mustapha Adam</h2>
                      <p className=' text-sm'></p>
                      <div className=" w-full py-1 flex justify-center lg:justify-start">
                          <div className=" grid grid-cols-3 max-w-max gap-x-3 lg:items-start w-auto ">
                          {
                              ceoSocials.map((s) => {
                                  return <Link href={s.link} className=" p-1 hover:bg-primary/30 rounded-lg">
                                      {s.icon}
                                  </Link>
                              })
                          } 
                      </div>
                      </div>
                  </div>
              </div> 
          </div>
         
    </div>
  )
}

