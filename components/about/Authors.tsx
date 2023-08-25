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
    <div className=' py-20 px-6'>
          <div className=" flex flex-col ">
              <div className=" border-b mx-auto w-full max-w-3xl border-primary py-2">
                  <h2 className=' font-semibold font-raleway text-center text-3xl'>Contributors</h2> 
              </div>
              <div className=" border-b py-6 border-primary flex flex-col justify-center text-center lg:text-start space-y-6 px-6 lg:flex-row my-6 max-w-3xl w-full mx-auto items-center space-x-6">
                  <div className=" h-[200px] w-[200px] rounded-full border-primary border-4 shadow-inner overflow-hidden ">
                      <Image src={founder} alt='Abdulrahman Dauda Gaya' className=' overflow-hidden h-full w-full rounded-lg object-cover ' />
                  </div>
                  <div className=" flex flex-col space-y-1">
                      <p className=' font-thin font-raleway'>Creator of Chemcider Inc</p>
                      <h2 className=' text-xl lg:text-3xl font-bold font-logo text-primary'>Abdulrahman Dauda Gaya</h2>
                      <p className=' text-sm'>Scientist and a Software Engineer with MBA</p>
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

              <div className=" mx-auto max-w-6xl w-full flex flex-col">
                  {/* hello people */}
              </div>
          </div>      
    </div>
  )
}






  {/* <div className=" grid grid-cols-2 gap-x-6 mx-auto max-w-5xl ">
                <div className=" border-b py-6 bg-white rounded-2xl border-primary  flex flex-col justify-center text-center lg:text-start space-y-6 px-6 lg:flex-row my-6 max-w-3xl w-full mx-auto items-center space-x-6">
                    <div className=" h-[150px] w-[150px] rounded-full border-primary border-4 shadow-inner overflow-hidden ">
                            <Image src={founder} alt='Abdulrahman Dauda Gaya' className=' overflow-hidden h-full w-full rounded-lg object-cover ' />
                            </div>
                            <div className=" flex flex-col space-y-1">
                                <p className=' font-thin font-raleway'>Creator of Chemcider Inc</p>
                                <h2 className=' text-xl lg:text-xl font-bold font-logo text-primary'>Abdulrahman Dauda Gaya</h2>
                                <p className=' text-sm'>Scientist and a Software Engineer with MBA</p>
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
                <div className=" border-b py-6 bg-white rounded-2xl border-primary  flex flex-col justify-center text-center lg:text-start space-y-6 px-6 lg:flex-row my-6 max-w-3xl w-full mx-auto items-center space-x-6">
                    <div className=" h-[150px] w-[150px] rounded-full border-primary border-4 shadow-inner overflow-hidden ">
                        <Image src={founder} alt='Abdulrahman Dauda Gaya' className=' overflow-hidden h-full w-full rounded-lg object-cover ' />
                    </div>
                    <div className=" flex flex-col space-y-1">
                        <p className=' font-thin font-raleway'>Creator of Chemcider Inc</p>
                        <h2 className=' text-xl lg:text-xl font-bold font-logo text-primary'>Abdulrahman Dauda Gaya</h2>
                        <p className=' text-sm'>Scientist and a Software Engineer with MBA</p>
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
            </div> */}