import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import founder from '../../public/doud.jpeg'
import { PiTwitterLogoLight } from 'react-icons/pi'
import { IoLogoInstagram } from 'react-icons/io'
import {AiOutlineLinkedin} from 'react-icons/ai'

const ceoSocials = [
    {
        name: "Instagram",
        link: "https://www.instagram.com/doudgaya/",
        icon: <IoLogoInstagram className=' h-8  w-8' />
    },
    {
        name: "Twitter",
        link: "https://twitter.com/DoudAbdulrahman",
        icon: <PiTwitterLogoLight className=' h-8  w-8' />
    },
    {
        name: "Linkedln",
        link: "https://www.linkedin.com/in/abdulrahman-dauda-b65526137/",
        icon: <AiOutlineLinkedin className=' h-8  w-8' />
    },
]

export const Authors = () => {
  return (
    <div className=' bg-slate-700 py-20'>
          <div className=" flex flex-col mx-auto max-w-4xl">
              <div className="">
                  <h2 className=' font-semibold font-raleway text-3xl'>Contributors</h2> 
              </div>
              <div className=" border-b py-6 flex justify-center flex-row my-6 max-w-3xl w-full mx-auto items-center space-x-6">
                  <div className=" h-[200px] w-[200px] rounded-full border-primary border-4 shadow-inner overflow-hidden ">
                      <Image src={founder} alt='Abdulrahman Dauda Gaya' className=' overflow-hidden h-full w-full rounded-lg object-cover ' />
                  </div>
                  <div className="">
                      <p className=' font-thin font-raleway'>Creator of Chemcider Inc</p>
                      <h2 className=' text-3xl font-bold font-logo text-primary'>Abdulrahman Dauda Gaya</h2>
                      <p>Scientist and a Software Engineer with MBA</p>
                      <div className=" w-full py-1">
                          <div className=" grid grid-cols-3 max-w-max gap-x-4 items-start w-auto ">
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
